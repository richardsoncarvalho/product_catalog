import styled from 'styled-components'

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.default};
  min-height: 70px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
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

export const Badget = styled.span`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: ${({ theme }) => theme.radius.rounded};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  width: 15px;
  height: 15px;
  font-size: 10px;
  position: absolute;
  right: 0;
  top: 0;
`

