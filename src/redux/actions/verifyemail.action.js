/* eslint-disable no-shadow */
import { verifyEmailConstants } from './constants';
import axios from '../../helpers/axios';

export const verifyingEmail = (user) => async (dispatch) => {
  dispatch({ type: verifyEmailConstants.VERIFYEMAIL_REQUEST });
  const res = await axios.post('/api/register', {
    ...user,
  });
  if (res.status === 200) {
    const { token } = res.data;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    dispatch({
      type: verifyEmailConstants.VERIFYEMAIL_SUCCESS,
      payload: {
        token,
      },
    });
  } else if (res.status === 400) {
    dispatch({
      type: verifyEmailConstants.VERIFYEMAIL_FAILURE,
      payload: { error: 'input login details' },
    });
  }
};


