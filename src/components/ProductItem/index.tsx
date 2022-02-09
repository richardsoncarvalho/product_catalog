import { Container, Image, Price, Title, Description } from './styles';
import { Products } from '../../protocols/products';
import { Rating } from '../Rating';

type ProductItemProps = {
  product: Products
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <Container>
      <Image src={product.image} />
      <Title>{product.title}</Title>
      <Rating rating={product.rating} />
      <Price>{product.price}</Price>
      <Description>{product.description}</Description>
    </Container>
  );
}
