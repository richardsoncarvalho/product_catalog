import { Container, Content, Price, Title, Description } from './styles';
import { FiShoppingCart } from "react-icons/fi";
import { Products } from '../../protocols/products';
import { Rating } from '../Rating';
import { Image } from '../Image';
import { Button } from '../Button';
import { descriptionLimit } from '../../utils/descriptionLimit';
import { transformNumberInCurrency } from '../../utils/transformNumberInCurrency';

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
        <Price>{transformNumberInCurrency(product.price)}</Price>
        <Description>{descriptionLimit(product.description)}</Description>
      </Content>

      <Button primary radius>
        <>
          Adicionar ao Carrinho
          <FiShoppingCart size={18} />
        </>
      </Button>
    </Container>
  );
}
