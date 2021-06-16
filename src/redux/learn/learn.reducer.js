import COURSES from '../courses.json';

const INITIAL_STATE = {
  courses: COURSES,
}

const learnReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    default:
      return state;
  }
}

export default learnReducer;