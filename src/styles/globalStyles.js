import { css } from '@emotion/react';

const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: #fafafa;
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

  .dark-theme {
    background-color: #2b3945;
    color: #fff;
  }

  .white-theme {
    background-color: #fff;
    color: #111517;
  }
`;

export default globalStyles;
