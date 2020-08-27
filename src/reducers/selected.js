import { SELECT_QUESTION } from '../actions/types';

const initalState = {
  'selectedQuestion': '',
};

export default function (state = initalState, action) {
  switch (action.type) {
    case SELECT_QUESTION:
      return action.payload;
    default:
      return state;
  }
}