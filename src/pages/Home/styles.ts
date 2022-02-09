import styled from 'styled-components'

export const ListProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  transition: all 0.2s ease-in-out;

  @media (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
