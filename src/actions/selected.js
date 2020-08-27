import axios from 'axios';
import { SELECT_QUESTION, EVALUATE_QUESTION } from './types';

const BASE_URL = '';

export const selectQuestion = question => {
  return {
    type: SELECT_QUESTION,
    payload: question,
  }
};

export const evaluateQuestion = (answer) => (dispatch) => {
  axios.get(BASE_URL, answer)
    .then(res => {
      dispatch({
        type: EVALUATE_QUESTION,
        payload: res.data
      });
    }).catch(err => {
      console.log(err);
    });
};