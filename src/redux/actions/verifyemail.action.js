/* eslint-disable no-shadow */
import { verifyEmailConstants } from './constants';
import axios from '../../helpers/axios';

export const verifyingEmail = (user) => async (dispatch) => {
  dispatch({ type: verifyEmailConstants.VERIFYEMAIL_REQUEST });
  // try {
  const res = await axios.post('/api/register', {
    ...user,
  });
  if (res.status === 200) {
    const { token } = res.data;
    // console.log(token);
    // console.log(res.data);
  // const email  = res.data;
  // console.log(email);
    // console.log(email);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    dispatch({
      type: verifyEmailConstants.VERIFYEMAIL_SUCCESS,
      payload: {
        token,
        // user,
        // TodayOrder,
        // TotalRevenue,
        // message,
      },
    });
  } else if (res.status === 400) {
    dispatch({
      type: verifyEmailConstants.VERIFYEMAIL_FAILURE,
      payload: { error: 'input login details' },
    });
  }

  // console.log(res);

  //   }else {
  //   if(res.status === 400) {
  //     dispatch({
  //       type: authConstants.LOGIN_FAILURE,
  //       payload: { error: res.data.error}
  //     });
  //   }
  // }
};
// export const isUserLoggedIn = () => async (dispatch) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     const user = JSON.parse(localStorage.getItem('user'));
//     dispatch({
//       type: authConstants.LOGIN_SUCCESS,
//       payload: {
//         token,
//         user,
//       },
//     });
//   } else {
//     dispatch({
//       type: authConstants.LOGIN_FAILURE,
//       payload: { error: 'Failed to login' },
//     });
//   }
// };


