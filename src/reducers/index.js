import { combineReducers } from 'redux';

import selected from './selected';
import evaluatedResult from './evaluatedResult';
import user from './user';
import questions from './questions';

export default combineReducers({
  selected,
  evaluatedResult,
  user,
  questions,
});