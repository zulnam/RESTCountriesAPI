import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: rgba(32, 44, 55, 1);
  padding: 0 42px;
  margin-bottom: 42px;
  height: 80px;

  h1 {
    font-weight: 800;
    font-size: 2rem;
  }
`;

const Header = () => (
  <HeaderContainer>
    <h1>Where in the world?</h1>
    <span>Toggle Placeholder</span>
  </HeaderContainer>
);

export default Header;
