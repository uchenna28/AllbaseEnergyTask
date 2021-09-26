/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
import { VendorConstants } from '../actions/constants';

const initState = {
  vendors: [],
  isLoading: true,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case VendorConstants.START_LOADING:
      state = {
        ...state,
        isLoading: true,
      };
      break;
    case VendorConstants.IS_SUCCESS:
      state = {
        ...state,
        vendors: [...action.payload],
        error: null,
        isLoading: false,
      };
      break;
    case VendorConstants.IS_ERROR:
      state = {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
  }

  return state;
};
