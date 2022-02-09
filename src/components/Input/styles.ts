import styled from 'styled-components'

export const Container = styled.input`
  border: 1px ${({ theme }) => theme.colors.gray} solid;
  border-radius: ${({ theme }) => theme.radius.default};
  padding: 10px;
  width: ${({width}) => width ? width + 'px' : '100%'};
`;
