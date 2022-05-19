const theme = {};

theme.numberBreakpoints = {
  xs: 320,
  sm: 480,
  md: 768,
  lg: 960,
  xl: 1284,
};

theme.breakpoints = {
  xs: `${theme.numberBreakpoints.xs}px`,
  sm: `${theme.numberBreakpoints.sm}px`,
  md: `${theme.numberBreakpoints.md}px`,
  lg: `${theme.numberBreakpoints.lg}px`,
  xl: `${theme.numberBreakpoints.xl}px`,
};

theme.fontWeights = {
  light: 400,
  medium: 600,
  heavy: 800,
};

theme.colors = {
  charcoal: 'rgba(17, 21, 23, 1)',
  white: 'rgba(255, 255, 255, 1)',
  creamWhite: 'rgba(250, 250, 250, 1)',
  darkBlue: 'rgba(43, 57, 69, 1)',
  darkerBlue: 'rgba(32, 44, 55, 1)',
  darkShadow: 'rgba(34, 34, 34, 1)',
  lightShadow: 'rgba(204, 204, 204, 1)',
};

export default theme;
