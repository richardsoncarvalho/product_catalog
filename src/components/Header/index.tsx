import { FiShoppingCart } from "react-icons/fi";
import { Link } from "../Link";

import { Wrapper, Container, Logo } from './styles'

export function Header() {
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <Logo>Logo</Logo>
        </Link>

        <Link rounded hover to="/cart">
          <FiShoppingCart size={18} />
        </Link>
      </Container>
    </Wrapper>
  );
}
