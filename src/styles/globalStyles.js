import { css } from '@emotion/react';
import theme from './theme';

const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  .light-theme-header {
    background-color: ${theme.colors.white};
    color: ${theme.colors.charcoal};
    transition: all 0.5s ease-in-out;
  }

  .light-theme-body {
    background-color: ${theme.colors.creamWhite};
    color: ${theme.colors.charcoal};
    transition: all 0.5s ease-in-out;
  }

  .dark-theme-header {
    background-color: ${theme.colors.darkBlue};
    color: ${theme.colors.white};
    transition: all 0.5s ease-in-out;
  }

  .dark-theme-body {
    background-color: ${theme.colors.darkerBlue};
    color: ${theme.colors.white};
    transition: all 0.5s ease-in-out;
  }

  .light-box-shadow {
    box-shadow: 0 5px 10px -5px ${theme.colors.lightShadow},
      0 -1px 10px -5px ${theme.colors.lightShadow};
  }

  .dark-box-shadow {
    box-shadow: 0 5px 10px -5px ${theme.colors.darkShadow},
      0 -1px 10px -5px ${theme.colors.darkShadow};
  }
`;

export default globalStyles;
