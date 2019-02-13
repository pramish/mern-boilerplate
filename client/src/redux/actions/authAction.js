import axios from 'axios';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Register for DEMo
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post('/api/users/register', userData)
    .then((res) => history.push('/login'))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const setCurrentUser = (decoded) => {
  return { type: SET_CURRENT_USER, payload: decoded };
};
