import { useProductProvider } from '../../hooks/useProductProvider';
import { ProductItem } from '../../components/ProductItem/index';
import { ListProducts } from './styles';

export function Home() {
  const { products } = useProductProvider()

  return (
    <div>

      <ListProducts>
        {products.map((product) => {
          return (
            <ProductItem key={product.id} product={product} />
          )
        })}
      </ListProducts>
    </div>
  );
}
