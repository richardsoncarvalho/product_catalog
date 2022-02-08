import { Container, Props } from "./styles";

type LinkProps = Props & {
  children?: JSX.Element
}

export function Link({ children, rounded, hover, ...args }: LinkProps) {
  return (
    <Container rounded={rounded} hover={hover} {...args}>
      {children}
    </Container>
  );
}
