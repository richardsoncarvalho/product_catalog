import { Wrapper } from "./styles";

type CardProps = {
  children: JSX.Element
}

export function Card({ children }: CardProps) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}
