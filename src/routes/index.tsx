import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import { Header } from '../components/Header'

import { Home } from '../pages/Home'
import { Cart } from '../pages/Cart'
import { Container } from './styles'

export function Routes() {
  return (
    <BrowserRouter>
      <Header />

      <Container>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}
