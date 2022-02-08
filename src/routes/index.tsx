import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import { Header } from '../components/Header'

import { Home } from '../pages/Home'
import { Cart } from '../pages/Cart'

export function Routes() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Switch>
    </BrowserRouter>
  )
}
