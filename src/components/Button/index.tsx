import { Container, Props } from './styes'

type ButtonProps = Props & {
  children: JSX.Element | string;
}

export function Button({ children, primary, rounded, radius, ...args }: ButtonProps) {
  return (
    <Container primary={primary} rounded={rounded} radius={radius} {...args}>
      {children}
    </Container>
  )
}
