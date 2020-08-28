import axios from 'axios';
import { GET_QUESTIONS } from './types';

const BASE_URL = 'http://127.0.0.1:8000';

export const getQuestions = () => (dispatch, getState) => {
  const token = getState().user.token;

  const config = {
    header: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': '*',
    },
  };

  if (token) {
    config.header['Authorization'] = `Token ${token}`;
  }

  axios.defaults.headers = {
    Authorization: `Token ${token}`
  };

  axios.get(`${BASE_URL}/api/questions/`, config)
    .then(res => {
      dispatch({
        type: GET_QUESTIONS,
        payload: res.data
      });
    }).catch(err => {
      console.log(err);
    });
};