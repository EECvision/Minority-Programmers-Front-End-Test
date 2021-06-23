import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import learnReducer from './learn/learn.reducer';
import navReducer from './nav/nav.reducer';
import startupReducer from './startup/startup.reducer';

const rootReducer = combineReducers({
  learn: learnReducer,
  startup: startupReducer,
  nav: navReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['nav']
}

export default persistReducer(persistConfig, rootReducer);
