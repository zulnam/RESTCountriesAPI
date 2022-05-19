import styled from '@emotion/styled';
import theme from '../../styles/theme';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 40px;
  height: 80px;
  width: 100%;

  h1,
  span {
    font-size: 0.9rem;
  }
  @media (min-width: ${theme.breakpoints.md}) {
    padding: 40px 40px 80px 40px;

    h1 {
      font-weight: 800;
      font-size: 2rem;
    }
  }
`;

export default HeaderContainer;
