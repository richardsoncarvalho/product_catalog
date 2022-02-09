import { useProductProvider } from '../../hooks/useProductProvider';
import { ProductItem } from '../../components/ProductItem/index';

export function Home() {
  const { products } = useProductProvider()

  return (
    <div>
      {products.map((product) => {
        return (
          <ProductItem key={product.id} product={product} />
        )
      })}
    </div>
  );
}
