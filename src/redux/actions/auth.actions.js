/* eslint-disable no-shadow */
import { authConstants } from './constants';
import axios from '../../helpers/axios';

export const login = (user) => async (dispatch) => {
  dispatch({ type: authConstants.LOGIN_REQUEST });
  // try {
  const res = await axios.post('/api/login', {
    ...user,
  });
  if (res.status === 200) {
    const
      {
        token
      } = res.data;
    // const { email } = res.data.Admin;
    localStorage.setItem('token', token);
    console.log(token);
    // localStorage.setItem('user', JSON.stringify(user));
    dispatch({
      type: authConstants.LOGIN_SUCCESS,
      payload: {
        token,
        // user,
        // TodayOrder,
        // TotalRevenue,
        // email,
      },
      
    });
  } else if (res.status === 400) {
    dispatch({
      type: authConstants.LOGIN_FAILURE,
      payload: { error: 'input login details' },
    });
  }
};
export const isUserLoggedIn = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch({
      type: authConstants.LOGIN_SUCCESS,
      payload: {
        token,
        user,
      },
    });
  } else {
    dispatch({
      type: authConstants.LOGIN_FAILURE,
      payload: { error: 'Failed to login' },
    });
  }
};

// // export const signout = () => {
// //   return async dispatch => {
// //     localStorage.clear();
//     dispatch({
// //       type: authConstants.LOGOUT_REQUEST
// //     });
// //   }
// // }