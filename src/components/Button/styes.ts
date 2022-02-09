import styled from 'styled-components'

export type Props = {
  primary?: boolean;
  rounded?: boolean;
  radius?: boolean;
}

export const Container = styled.button<Props>`
  align-items: center;
  background: #f1f1f1;
  border: none;
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  margin: 10px 0;
  font-family: 'ROBOTO';
  cursor: pointer;

  ${({ primary, theme }) => primary && `
    background: ${theme.colors.red};
    color: ${theme.colors.white};
  `}

  ${({ rounded, theme }) => rounded && `
    border-radius: ${theme.radius.rounded};
  `}

  ${({ radius, theme }) => radius && `
    border-radius: ${theme.radius.default};
  `}

  &:hover {
    filter: brightness(.85)
  }

  svg {
    margin-left: 5px;
  }
`;
