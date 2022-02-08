import { Container, Props } from "./styles";

type RouterLinkProps = Props & {
  children?: JSX.Element | string
}

export function Link({ children = "my link", rounded, hover, ...args }: RouterLinkProps) {
  return (
      <Container rounded={rounded} hover={hover} {...args}>
        {children}
      </Container>
  );
}
