import styled from '@emotion/styled';
import theme from '../../styles/theme';

const CountryPageContainer = styled.div`
  padding: 20px;
  height: 100vh;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 32px;
  }
`;

export default CountryPageContainer;
