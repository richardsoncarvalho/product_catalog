
import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
`;

export const Image = styled.img`
  height: 100%;
  width: auto;
`;
