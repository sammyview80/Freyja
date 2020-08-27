import { SELECT_QUESTION } from './types';

export const selectQuestion = question => {
  return {
    type: SELECT_QUESTION,
    payload: question,
  }
};