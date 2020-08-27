import axios from 'axios';
import { SELECT_QUESTION, EVALUATE_ANSWER } from './types';

const BASE_URL = 'http://127.0.0.1:8000';

export const selectQuestion = question => {
  return {
    type: SELECT_QUESTION,
    payload: question,
  }
};

export const evaluateAnswer = (answer) => (dispatch) => {
  console.log(answer);
  // axios.get(BASE_URL, answer)
  //   .then(res => {
  //     dispatch({
  //       type: EVALUATE_ANSWER,
  //       payload: res.data
  //     });
  //   }).catch(err => {
  //     console.log(err);
  //   });
};