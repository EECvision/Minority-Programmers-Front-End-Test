import STARTUPS from '../startups.json';

const INITIAL_STATE = {
  startups: STARTUPS
}

const startupReducer = (state=INITIAL_STATE, action) => {
  switch(action.type){
    default: 
      return state;
  }
}

export default startupReducer;