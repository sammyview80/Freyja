import axios from 'axios';

import { BASE_URL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from './types';

export const loginUser = (username, password) => (dispatch) => {
  console.log(username)
  const config = {
    header: {
      'Content-Type': 'application/json',
    }
  };

  const auth = {
    'username': username,
    'password': password,
  };

  axios.post(`${BASE_URL}/api/login/`, auth, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
    }).catch(err => {
      console.log(err);
      dispatch({
        type: LOGIN_FAIL
      })
    });
}

export const logout = () => (dispatch) => {
  console.log('logout');
  dispatch({
    type: LOGOUT_SUCCESS
  })
};