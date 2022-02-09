
import { Input } from '../Input';
import { Container, Title, Rows, ProductInfo } from './styles';
import { transformNumberInCurrency } from '../../utils/transformNumberInCurrency';
import { useCartProvider } from '../../hooks/useCartProvider';
import { Product } from '../../providers/cart';

export function Table() {

  const { cart, onChangeValue } = useCartProvider()

  return (
    <Container>
      <Rows>
        <Title>Produtos</Title>
        <Title>Preço</Title>
        <Title>Quantidade</Title>
        <Title>Total</Title>
      </Rows>

      {cart.map((product: Product) => (
        <Rows key={product.id}>
          <ProductInfo>
            <img src={product.image} alt={product.title} height="60" /> {product.title}
          </ProductInfo>

          <ProductInfo>{transformNumberInCurrency(product.price)}</ProductInfo>

          <ProductInfo>
            <Input
              type="number"
              min={1}
              value={product.qtd}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onChangeValue({ id: product.id, qtd: +e.target.value })
              }} />
          </ProductInfo>

          <ProductInfo>{transformNumberInCurrency(product.qtd * product.price)}</ProductInfo>
        </Rows>
      ))}
    </Container>
  )
}
