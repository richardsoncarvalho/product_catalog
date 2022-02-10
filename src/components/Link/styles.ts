import styled from 'styled-components'
import { Link, LinkProps } from "react-router-dom";

export type Props = LinkProps & {
  rounded?: boolean
  hover?: boolean
  background?: string
}

export const Container = styled(Link)<Props>`
  display: flex;
  color: ${({ theme }) => theme.colors.black};
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  margin: 0 0 0 auto;
  transition: all .2s ease-in-out;
  position: relative;

  ${({ rounded, theme }) => rounded && `border-radius: ${theme.radius.rounded}`};

  ${({ background, theme }) => background && `
    background-color: ${background};
    color: ${theme.colors.white};
    font-family: 'Roboto';
    border-radius: ${theme.radius.default};
    padding: 15px 0;
  `};

  ${({ hover, theme }) => hover && `
    &:hover {
      background-color: ${theme.colors.gray}
    }
  `}
`;
