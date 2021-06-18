import { createSelector } from 'reselect';

const selectNavbar = state => state.nav;

export const selectToggleNavbar = createSelector(
  [selectNavbar],
  nav => nav.toggleNavbar
);

export const selectActiveLink = createSelector(
  [selectNavbar],
  nav => nav.activeLink
);

