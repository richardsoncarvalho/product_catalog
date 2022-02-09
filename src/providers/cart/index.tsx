import { createContext, useCallback, useMemo, useState } from 'react'
import { Products } from '../../protocols/products';

type CacheProviderProps = {
  children: JSX.Element
}

export type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  qtd: number;
}

const localStorageKey = '@PRODUCTSCART'

export const CartContext = createContext<any>({})

export function CartProvider({ children }: CacheProviderProps) {
  const [cart, setCart] = useState<Product[]>(() => {
    const products = localStorage.getItem(localStorageKey) as string;

    if (products) {
      return JSON.parse(products)
    }

    return []
  });

  const saveProduct = useCallback(async (products: Products) => {
    try {
      const product: Product = {
        id: products.id,
        title: products.title,
        image: products.image,
        price: products.price,
        qtd: 1,
      }

      const local = await localStorage.getItem(localStorageKey);
      if (!local) {
        await localStorage.setItem(localStorageKey, JSON.stringify([product]))
      } else {
        const products = await JSON.parse(localStorage.getItem(localStorageKey) as string)
        await localStorage.setItem(localStorageKey, JSON.stringify([...products, product]))
      }
      setCart(prev => ([...prev, product]));
    } catch (error) {
      console.error(error)
    }
  }, [])

  const productIds = useMemo(() => {
    return cart.map(product => product.id)
  }, [cart])

  return (
    <CartContext.Provider value={{cart, saveProduct, productIds}}>
      {children}
    </CartContext.Provider>
  )
}
