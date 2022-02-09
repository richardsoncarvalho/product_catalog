import { Container, Props } from './styes'

type ButtonProps = Props & {
  children: JSX.Element | string;
  primary?: boolean;
  success?: boolean;
  rounded?: boolean;
  radius?: boolean;
  onClick?: () => void
}

export function Button({ children, ...args }: ButtonProps) {
  return (
    <Container {...args}>
      {children}
    </Container>
  )
}
