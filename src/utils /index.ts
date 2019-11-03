export const breakpoints = {
  phoneOnly: `(max-width: 599px)`,
  tabletPortraitUp: `(min-width: 600px)`,
  tabletLandscapeUp: `(min-width: 900px)`,
  desktopUp: `(min-width: 1200px)`,
  bigDesktopUp: `(min-width: 1800px)`,
};

export { getToken, setToken, removeToken } from './auths';
export { validatePassword } from './formValidators';
