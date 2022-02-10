

import { Container, LightText, Title, BoldText, Wrapper } from './styles'
import { useCartProvider } from '../../hooks/useCartProvider';
import { transformNumberInCurrency } from '../../utils/transformNumberInCurrency';
import { Link } from '../Link';

export function Order() {

  const { totalProduct, totalValueProduct } = useCartProvider();

  return (
    <Container>
      <Title>resumo do pedido</Title>

      <Wrapper>
        <LightText>{totalProduct} produto</LightText>
        <LightText>{transformNumberInCurrency(totalValueProduct)}</LightText>
      </Wrapper>

      <Wrapper>
        <BoldText>Total</BoldText>
        <BoldText>{transformNumberInCurrency(totalValueProduct)}</BoldText>
      </Wrapper>

      <Link to="/" background="#FF6347">
        continuar a compra
      </Link>
    </Container>
  );

}
