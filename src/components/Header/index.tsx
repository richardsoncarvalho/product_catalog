import { FiShoppingCart } from "react-icons/fi";
import { Link } from "../Link";

import { Wrapper, Container, Logo, Badget } from './styles'
import { useCartProvider } from '../../hooks/useCartProvider';

export function Header() {
  const { cart } = useCartProvider()

  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <Logo>Logo</Logo>
        </Link>

        <Link rounded hover to="/cart">
          <>
            <FiShoppingCart size={18} />
            {cart.length !== 0 && <Badget>{cart.length}</Badget>}
          </>
        </Link>
      </Container>
    </Wrapper>
  );
}
