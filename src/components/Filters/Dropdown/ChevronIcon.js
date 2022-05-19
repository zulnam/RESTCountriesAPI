import styled from '@emotion/styled';
import theme from '../../../styles/theme';

const ChevronIcon = styled.span`
  margin-left: 1rem;
  display: inline-flex;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    transform: ${(props) => (props.isOpen ? `rotate(180deg)` : 'unset')};
    transition: transform 0.5s ease-in-out;
  }

  svg path {
    fill: ${(props) => (props.darkMode ? 'white' : theme.colors.darkBlue)};
    transition: fill 0.5s ease-in-out;
  }
`;

export default ChevronIcon;
