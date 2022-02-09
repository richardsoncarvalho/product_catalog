import styled from 'styled-components'

export const Container = styled.div``

export const Rows = styled.div`
  display: grid;
  grid-template-columns: 3fr repeat(3, 100px);
  border-bottom: 1px #f1f1f1 solid;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-family: 'ROBOTO';
  padding: 10px;
`;

export const ProductInfo = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-family: 'Open Sans';
  padding: 10px;
  position: relative;

  img {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color:  ${({ theme }) => theme.colors.red};
  border: none;
  height: 20px;
  width: 20px;
  position: absolute;
  right: 0;
  cursor: pointer;

  svg {
    transition: all 0.2s ease-in-out;
  }

  &:hover svg {
    height: 20px;
    width: 20px;
  }
`
