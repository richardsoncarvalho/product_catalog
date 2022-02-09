
import { Input } from '../Input';
import { Container, Title, Rows, ProductInfo } from './styles';
import { transformNumberInCurrency } from '../../utils/transformNumberInCurrency';

export function Table() {
  const products = [{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    },
    "qtd": 1,
  }];

  return (
    <Container>
      <Rows>
        <Title>Produtos</Title>
        <Title>Preço</Title>
        <Title>Quantidade</Title>
        <Title>Total</Title>
      </Rows>

      {products.map(product => (
        <Rows key={product.id}>
          <ProductInfo>
            <img src={product.image} alt={product.title} height="60" /> {product.title}
          </ProductInfo>

          <ProductInfo>{transformNumberInCurrency(product.price)}</ProductInfo>

          <ProductInfo>
            <Input type="number" value={product.qtd} />
          </ProductInfo>

          <ProductInfo>{transformNumberInCurrency(product.qtd * product.price)}</ProductInfo>
        </Rows>
      ))}
    </Container>
  )
}
