import styled from '@emotion/styled';
import theme from '../../styles/theme';

const LeftArrowIcon = styled.span`
  position: relative;
  top: 3px;
  margin-right: 8px;

  svg {
    width: 16px;
    height: 16px;
  }

  svg path {
    fill: ${(props) =>
      props.darkMode ? theme.colors.white : theme.colors.darkBlue};
    transition: fill 0.5s ease-in-out;
  }
`;

export default LeftArrowIcon;
