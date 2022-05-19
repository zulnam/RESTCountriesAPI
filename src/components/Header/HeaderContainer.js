import styled from '@emotion/styled';
import theme from '../../styles/theme';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 20px;
  height: 80px;
  width: 100%;

  h1,
  span {
    font-size: 0.9rem;
  }
  @media (min-width: ${theme.breakpoints.md}) {
    padding: 0 42px;
    margin-bottom: 42px;

    h1 {
      font-weight: 800;
      font-size: 2rem;
    }
  }
`;

export default HeaderContainer;
