import { Container, Content, Price, Title, Description } from './styles';
import { Products } from '../../protocols/products';
import { Rating } from '../Rating';
import { Image } from '../Image';
import { descriptionLimit } from '../../utils/descriptionLimit';
import { tranformNumberInCurrency } from '../../utils/tranformNumberInCurrency';

type ProductItemProps = {
  product: Products
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <Container>
      <Image src={product.image} />

      <Content>
        <Title>{product.title}</Title>
        <Rating rating={product.rating} />
        <Price>{tranformNumberInCurrency(product.price)}</Price>
        <Description>{descriptionLimit(product.description)}</Description>
      </Content>
    </Container>
  );
}
