/* eslint-disable import/no-anonymous-default-export, no-param-reassign, default-case */
import { verifyEmailConstants } from '../actions/constants';

const initState = {
  loading: false,
  token: null,
  // message: null,
  // user: {
  //   email: '',
  //   fullName: '',
  //   firstName: '',
  //   lastName: '',
  //   phone: '',
  // },
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
        // user: action.payload.user,
        token: action.payload.token,
        // meaasage: action.payload.message,
        authenticate: true,
        authenticating: false,
      };
      break;
    // case ve.LOGOUT_REQUEST:
    //   state = {
    //     ...initState,
    //   };
    //   break;
  }

  return state;
};
