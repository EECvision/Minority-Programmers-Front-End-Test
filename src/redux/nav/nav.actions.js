import navActionTypes from './nav.types';

export const toggleNavbar = () => ({
  type: navActionTypes.TOGGLE_NAVBAR,
})

export const setActiveLink = link => ({
  type: navActionTypes.SET_ACTIVE_LINK,
  payload: link
})