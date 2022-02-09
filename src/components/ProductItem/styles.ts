import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.default};
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  padding: 20px;
`;

export const Content = styled.div``;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
  font-family: 'Open Sans';
  margin-bottom: 10px;
`;

export const Price = styled.span`
  font-size: 34px;
  font-weight: 500;
  font-family: 'Roboto';
`;

export const Description = styled.p`
  margin-top: 15px;
  font-size: 12px;
  font-weight: 300;
  font-family: 'Open Sans';
  line-height: 14px;
`;

