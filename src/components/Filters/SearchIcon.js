import styled from '@emotion/styled';
import theme from '../../styles/theme';

const SearchIcon = styled.span`
  display: inline-flex;
  margin-left: 1rem;

  svg {
    width: 16px;
    height: 16px;
  }

  svg path {
    fill: ${(props) => (props.darkMode ? 'white' : theme.colors.darkBlue)};
    transition: fill 0.5s ease-in-out;
  }
`;

export default SearchIcon;
