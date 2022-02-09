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

  img {
    margin-right: 10px;
  }
`;
