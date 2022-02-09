import { useQuery } from 'react-query'
import { ProductItem } from '../../components/ProductItem/index';
import { ListProducts } from './styles';
import { Products } from '../../protocols/products';

import Services from './services';

export function Home() {
  const {
    data,
    isLoading
  } = useQuery<Products[]>('products', () => Services.getProducts(), { initialData: [] });

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>

      <ListProducts>
        {data?.map((product) => {
          return (
            <ProductItem key={product.id} product={product} />
          )
        })}
      </ListProducts>
    </div>
  );
}
