/* eslint-disable import/no-anonymous-default-export, no-param-reassign, default-case */
import { customersConstants } from '../actions/constants';

const initState = {
  customer: [],
  error: null,
  isLoading: true,
  totalPages: 0,
  // totalPages: 3,
  // currentPage: 0,
};

export default (state = initState, action) => {
  switch (action.type) {
    case customersConstants.START_LOADING:
      state = {
        ...state,
        isLoading: true,
      };
      break;
    case customersConstants.ALLCUSTOMERS_SUCCESS:
      console.log(action.payload.totalPages);
      state = {
        ...state,
        customer: [...action.payload],
        totalPages: action.payload.totalPages,
        error: null,
        isLoading: false,
        // totalPages: [...action.payload],
        // currentPages: action.payload.currentPages,
      };
      break;
    case customersConstants.ALLCUSTOMERS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
      break;
    case customersConstants.HAS_NEXTPAGE:
      state = {
        ...state,
        hasNextPage: action.payload.hasNextPage,
        isLoading: false,
      };
      break;
  }

  return state;
};
