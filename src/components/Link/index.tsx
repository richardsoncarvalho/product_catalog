import { Container, Props } from "./styles";

type RouterLinkProps = Props & {
  children?: JSX.Element | string
}

export function Link({ children, ...args }: RouterLinkProps) {
  return (
      <Container {...args}>
        {children}
      </Container>
  );
}
