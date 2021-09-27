/* eslint-disable import/no-anonymous-default-export, no-param-reassign, default-case */
import { authConstants } from '../actions/constants';

const initState = {
  loading: false,
  token: null,
  authenticate: false,
  authenticating: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        loading: true,
        authenticating: true,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        loading: false,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...initState,
      };
      break;
  }

  return state;
};
