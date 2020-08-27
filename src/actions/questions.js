import axios from 'axios';
import { GET_QUESTIONS } from './types';

const BASE_URL = 'http://127.0.0.1:8000';

export const getQuestions = () => (dispatch) => {
  axios.get(`${BASE_URL}/api/questions/`)
    .then(res => {
      dispatch({
        type: GET_QUESTIONS,
        payload: res.data
      });
    }).catch(err => {
      console.log(err);
    });
};