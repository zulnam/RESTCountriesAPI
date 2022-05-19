import styled from '@emotion/styled';
import theme from '../../styles/theme';

const MoonIcon = styled.span`
  display: inline-flex;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }

  svg path {
    fill: ${(props) => (props.darkMode ? 'white' : theme.colors.darkBlue)};
    transition: fill 0.5s ease-in-out;
  }
`;

export default MoonIcon;
