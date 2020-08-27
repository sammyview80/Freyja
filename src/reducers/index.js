import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import selected from './selected';
import evaluatedResult from './evaluatedResult';

export default combineReducers({
  selected,
  evaluatedResult,
  form: formReducer,
});