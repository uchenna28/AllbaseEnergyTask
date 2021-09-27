/* eslint-disable import/no-anonymous-default-export, no-param-reassign, default-case */
import { verifyEmailConstants } from '../actions/constants';

const initState = {
  loading: false,
  token: null,
  authenticate: false,
  authenticating: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case verifyEmailConstants.VERIFYEMAIL_REQUEST:
      state = {
        ...state,
        loading: true,
        authenticating: true,
      };
      break;
    case verifyEmailConstants.VERIFYEMAIL_SUCCESS:
      state = {
        ...state,
        loading: false,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
      break;
  }

  return state;
};
