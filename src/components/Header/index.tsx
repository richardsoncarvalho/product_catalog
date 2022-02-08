import { FiShoppingCart } from "react-icons/fi";

import { Wrapper, Container, Logo, ButtonCart } from './styles'

export function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo>Logo</Logo>

        <ButtonCart>
          <FiShoppingCart size={18} />
        </ButtonCart>
      </Container>
    </Wrapper>
  );
}
