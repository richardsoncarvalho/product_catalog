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

export const CartContext = createContext<any>({})

export function CartProvider({ children }: CacheProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);

  const saveProduct = useCallback((products: Products) => {
    const product: Product = {
      id: products.id,
      title: products.title,
      image: products.image,
      price: products.price,
      qtd: 1,
    }
    setCart(prev => ([...prev, product]));
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
