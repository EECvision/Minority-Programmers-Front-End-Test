import navActionTypes from './nav.types';

const INITIAL_STATE = {
  toggleNavbar: false,
  activeLink: {"home": true}
}

const navReducer = (state=INITIAL_STATE, action) => {
  switch(action.type){
    case navActionTypes.TOGGLE_NAVBAR:
      return{
        ...state,
        toggleNavbar: action.payload
      }
    case navActionTypes.SET_ACTIVE_LINK:
      return{
        ...state,
        activeLink: action.payload
      }
    default: return state;
  }
}

export default navReducer;