import styled from 'styled-components'

export type Props = {
  rounded?: boolean
  hover?: boolean
}

export const Container = styled.a<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  margin: 0 0 0 auto;
  transition: all .2s ease-in-out;

  ${({ rounded, theme }) => rounded && `border-radius: ${theme.radius.rounded}`};

  ${({ hover, theme }) => hover && `
    &:hover {
      background-color: ${theme.colors.gray}
    }
  `}
`;
