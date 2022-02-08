import { createContext } from 'react'

type ProductProviderProps = {
  children: JSX.Element
}

export const ProductContext = createContext({});

export function ProductProvider({ children }: ProductProviderProps) {

  return (
    <ProductContext.Provider value={{}}>
      {children}
    </ProductContext.Provider>
  )
}
