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

  const onChangeValue = useCallback(async ({ id, qtd }) => {
    try {
      const products = await JSON.parse(localStorage.getItem(localStorageKey) as string);
      const update = products.map((product: Product) => {
        if (product.id !== id) {
          return product
        }

        return {
          ...product,
          qtd
        }
      })

      await localStorage.setItem(localStorageKey, JSON.stringify(update));
      setCart(prev => prev.map((product: Product) => {
        if (product.id !== id) {
          return product
        }

        return {
          ...product,
          qtd
        }
      }))
    } catch (error) {
      console.log(error)
    }
  }, [])

  const productIds = useMemo(() => {
    return cart.map(product => product.id)
  }, [cart])

  return (
    <CartContext.Provider value={{cart, saveProduct, onChangeValue, productIds}}>
      {children}
    </CartContext.Provider>
  )
}
