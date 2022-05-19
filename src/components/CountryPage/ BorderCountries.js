import styled from '@emotion/styled';
import theme from '../../styles/theme';

const BorderCountries = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    margin-bottom: 16px;
  }

  div {
    width: 100%;
    display: grid;
    grid-auto-rows: 44px;
    grid-template-columns: repeat(auto-fill, 100px);
    gap: 0px 10px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;

    strong {
      margin-bottom: unset;
      margin-right: 16px;
    }
  }
`;

export default BorderCountries;
