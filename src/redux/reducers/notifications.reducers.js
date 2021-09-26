/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
import { NotificationConstants } from '../actions/constants';

const initState = {
  notifications: [],
  isLoading: true,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case NotificationConstants.START_LOADING:
      state = {
        ...state,
        isLoading: true,
      };
      break;
    case NotificationConstants.IS_SUCCESS:
      state = {
        ...state,
        notifications: [...action.payload],
        error: null,
        isLoading: false,
      };
      break;
    case NotificationConstants.IS_ERROR:
      state = {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
  }

  return state;
};
