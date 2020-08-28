import { SELECT_QUESTION } from './types';

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