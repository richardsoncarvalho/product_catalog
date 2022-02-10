import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import { ProductItem } from '../../components/ProductItem';
import { MockWithProvider } from '../../mocks/mockWithProvider';
import { Products } from '../../protocols/products';
import { useCartProvider } from '../../hooks/useCartProvider';

const product: Products = {
  id: 1,
  title: "any_title",
  category: "any_category",
  description: "any_description",
  image: "any_image",
  price: 100,
  rating: {
    rate: 4,
    count: 100
  }
}

describe('<ProductItem />', () => {
  it('renderiza corretamente', async () => {
    render(<MockWithProvider><ProductItem product={product} /></MockWithProvider>)

    const productScreen = screen.getByText("any_title")

    expect(productScreen).toBeInTheDocument()
  })

  it('preco renderizado na moeda brasileira', async () => {
    render(<MockWithProvider><ProductItem product={product} /></MockWithProvider>)

    const productScreen = screen.getByText("R$ 100,00")

    expect(productScreen).toBeInTheDocument()
  })

  it('verifica se quando adiciona no carrinho não pode mais adicionar', async () => {
    render(<MockWithProvider><ProductItem product={product} /></MockWithProvider>)

    const button = screen.getByRole('button')

    expect(button).toBeVisible();

    userEvent.click(button)

    expect(button).not.toHaveTextContent("Adicionar ao Carrinho")
  })
})
