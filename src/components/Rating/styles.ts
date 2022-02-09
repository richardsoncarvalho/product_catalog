import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 5px 0;
`;

export const WrapperContent = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  margin: 3px 0 0 5px;
`;
