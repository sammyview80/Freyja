import { combineReducers } from 'redux';

import selected from './selected';
import evaluatedResult from './evaluatedResult';

export default combineReducers({
  selected,
  evaluatedResult,
});