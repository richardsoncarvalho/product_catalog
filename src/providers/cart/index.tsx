import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
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

      setCart(prev => ([...prev, product]));
    } catch (error) {
      console.error(error)
    }
  }, [])

  const removeProduct = useCallback((id) => {
    setCart(prev => {
      return prev.filter(product => product.id !== id);
    })
  }, [])

  const onChangeValue = useCallback(async ({ id, qtd }) => {
    try {
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

  useEffect(() => {
    (async () => {
      await localStorage.setItem(localStorageKey, JSON.stringify(cart))
    })()
  }, [cart])

  const productIds = useMemo(() => {
    return cart.map(product => product.id)
  }, [cart])

  return (
    <CartContext.Provider value={{cart, saveProduct, removeProduct, onChangeValue, productIds}}>
      {children}
    </CartContext.Provider>
  )
}
