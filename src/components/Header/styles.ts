import styled from 'styled-components'

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.default};
  min-height: 70px;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
  height: 70px;
`

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: 500;
  font-family: 'Roboto';
  margin: 0 0 0 auto;
`
export const ButtonCart = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: ${({ theme }) => theme.radius.rounded};
  cursor: pointer;
  margin: 0 0 0 auto;
  transition: all .2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray}
  }
`;
