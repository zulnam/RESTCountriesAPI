import styled from '@emotion/styled';

const ListContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.8fr;
  gap: 20px 0;

  ul {
    letter-spacing: -0.015rem;
    list-style: none;
    font-size: 0.9rem;
    padding-left: 0;
    strong {
      font-weight: 500;
    }
    li {
      padding-bottom: 0.62rem;
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: unset;
    gap: 0 20px;
    margin-bottom: 1rem;
  }
`;

export default ListContainer;
