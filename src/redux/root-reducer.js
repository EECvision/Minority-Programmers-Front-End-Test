import {combineReducers} from 'redux';
import learnReducer from './learn/learn.reducer';
import navReducer from './nav/nav.reducer';
import startupReducer from './startup/startup.reducer';

const rootReducer = combineReducers({
  learn: learnReducer,
  startup: startupReducer,
  nav: navReducer
})

export default rootReducer;