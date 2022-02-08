import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import { Header } from '../components/Header'

import { Home } from '../pages/Home'
import { Cart } from '../pages/Cart'
import { Container } from './styles'
import { ProductProvider } from '../providers/products'

export function Routes() {
  return (
    <BrowserRouter>
      <Header />

      <Container>
        <Switch>
          <Route
            path="/"
            element={
              <ProductProvider>
                <Home />
              </ProductProvider>
            } />

          <Route path="/cart" element={<Cart />} />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}
