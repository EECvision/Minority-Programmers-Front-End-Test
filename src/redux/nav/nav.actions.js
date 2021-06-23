import navActionTypes from './nav.types';

export const toggleNavbar = state => ({
  type: navActionTypes.TOGGLE_NAVBAR,
  payload: state
})

export const setActiveLink = link => ({
  type: navActionTypes.SET_ACTIVE_LINK,
  payload: link
})