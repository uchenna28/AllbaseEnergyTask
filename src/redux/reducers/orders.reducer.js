/* eslint-disable import/no-anonymous-default-export, no-param-reassign, default-case */

import { OrderConstants } from '../actions/constants';

const initState = {
  orders: [],
  error: null,
  isOrderLoading: true,
};

export default (state = initState, action) => {
  switch (action.type) {
    case OrderConstants.START_LOADING:
      state = {
        ...state,
        isOrderLoading: true,
      };
      break;
    case OrderConstants.IS_SUCCESS:
      state = {
        ...state,
        orders: [...action.payload],
        isOrderLoading: false,
        error: null,
      };

      break;
    case OrderConstants.IS_ERROR:
      state = {
        ...state,
        error: action.payload.error,
        isOrderLoading: false,
      };
      break;
    // case OrderConstants.ORDER_DELETE:
    //   state.orders = state.orders.filter(
    //     (i) => i.reference !== action.payload.reference,
    //   );
    //   break;
  }

  return state;
};
