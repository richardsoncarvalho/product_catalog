import { createContext, useEffect, useState } from 'react'
import { Products } from '../../protocols/products';
import Service from './services'

type ProductProviderProps = {
  children: JSX.Element
}

export const ProductContext = createContext({});

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Products[]>([])

  useEffect(() => {
    let isMounted = true;

    Service.getProducts().then(products => {
      if (isMounted) {
        setProducts(products.data)
      }
    })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <ProductContext.Provider value={{
      products
    }}>
      {children}
    </ProductContext.Provider>
  )
}
