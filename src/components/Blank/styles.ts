import styled from "styled-components";


export const WrapperBlank = styled.div`

  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  font-size: 18px;
  font-family: 'Roboto';
  color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.radius.default};
  height: 100%;
  justify-content: center;
  width: 100%;
  padding: 40px;

  svg {
    margin-bottom: 10px;
  }
`
