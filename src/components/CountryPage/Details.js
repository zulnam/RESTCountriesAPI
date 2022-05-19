import styled from '@emotion/styled';
import theme from '../../styles/theme';

const Details = styled.main`
  display: grid;
  grid-template-rows: 0.6fr 1fr;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-rows: unset;
    grid-template-columns: 0.8fr 1fr;
    gap: 0px 80px;
  }
`;

export default Details;
