import { CacheProvider } from "../providers/cache";
import { CartProvider } from "../providers/cart";
import { Provider } from "../providers/theme";

type MockWithProviderProps = {
  children: JSX.Element
}

export function MockWithProvider({ children }: MockWithProviderProps) {
  return (
    <Provider>
      <CacheProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </CacheProvider>
    </Provider>
  )
}
