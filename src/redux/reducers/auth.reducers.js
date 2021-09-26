/* eslint-disable import/no-anonymous-default-export, no-param-reassign, default-case */
import { authConstants } from '../actions/constants';

const initState = {
  loading: false,
  token: null,
  TotalRevenue: 0,
  TodayOrder: 0,
  email: null,
  user: {
    email: '',
    fullName: '',
    firstName: '',
    lastName: '',
    phone: '',
  },
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
        user: action.payload.user,
        token: action.payload.token,
        TotalRevenue: action.payload.TotalRevenue,
        TodayOrder: action.payload.TodayOrder,
        email: action.payload.email,
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
