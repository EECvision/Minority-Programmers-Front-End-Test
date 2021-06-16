import {combineReducers} from 'redux';
import learnReducer from './learn/learn.reducer';
import startupReducer from './startup/startup.reducer';

const rootReducer = combineReducers({
  learn: learnReducer,
  startup: startupReducer
})

export default rootReducer;