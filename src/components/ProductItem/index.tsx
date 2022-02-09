import { Container, Content, Price, Title, Description } from './styles';
import { FiShoppingCart, FiCheck } from "react-icons/fi";
import { Products } from '../../protocols/products';
import { Rating } from '../Rating';
import { Image } from '../Image';
import { Button } from '../Button';
import { descriptionLimit } from '../../utils/descriptionLimit';
import { transformNumberInCurrency } from '../../utils/transformNumberInCurrency';
import { useCartProvider } from '../../hooks/useCartProvider';

type ProductItemProps = {
  product: Products
}

export function ProductItem({ product }: ProductItemProps) {
  const { saveProduct, productIds } = useCartProvider();

  return (
    <Container>
      <Image src={product.image} />

      <Content>
        <Title>{product.title}</Title>
        <Rating rating={product.rating} />
        <Price>{transformNumberInCurrency(product.price)}</Price>
        <Description>{descriptionLimit(product.description)}</Description>
      </Content>

      {!productIds.includes(product.id) ? (
        <Button primary radius onClick={() => saveProduct(product)}>
          <>
            Adicionar ao Carrinho
            <FiShoppingCart size={18} />
          </>
        </Button>
      ) : (
        <Button success radius>
          <FiCheck size={18} color="#f1f1f1" />
        </Button>
      )}
    </Container>
  );
}
