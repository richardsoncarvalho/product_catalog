import { useQuery } from 'react-query'
import { ProductItem } from '../../components/ProductItem/index';
import { ListProducts } from './styles';
import { Products } from '../../protocols/products';

import { WrapperBlank } from '../../components/Blank/styles';
import { FiShoppingBag } from "react-icons/fi";

import Services from './services';

export function Home() {
  const {
    data,
    isLoading,
    isFetching
  } = useQuery<Products[]>('products', () => Services.getProducts(), { initialData: [] });

  if (isLoading || isFetching) {
    return (
      <WrapperBlank>
        <FiShoppingBag size={32} />
        carregando...
      </WrapperBlank>
    )
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
