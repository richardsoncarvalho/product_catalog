import { Container, Props } from "./styles";

type RouterLinkProps = Props & {
  children?: JSX.Element
}

export function Link({ children, rounded, hover, ...args }: RouterLinkProps) {
  return (
      <Container rounded={rounded} hover={hover} {...args}>
        {children}
      </Container>
  );
}
