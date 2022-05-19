import styled from '@emotion/styled';
import theme from '../../styles/theme';

const ImageContainer = styled.span`
  position: relative;
  max-height: 220px;

  @media (min-width: ${theme.breakpoints.md}) {
    max-width: 560px;
    max-height: 400px;
  }
`;

export default ImageContainer;
