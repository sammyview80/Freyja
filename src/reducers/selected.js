import { SELECT_QUESTION } from '../actions/types';

const initalState = {};

export default function (state = initalState, action) {
  switch (action.type) {
    case SELECT_QUESTION:
      return { 'selectedQuestion': action.payload}
    default:
      return state;
  }
}