/* eslint-disable import/no-anonymous-default-export, no-param-reassign, default-case */

import { ProductsConstants } from '../actions/constants';

const initState = {
  Products: [],
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case ProductsConstants.PRODUCTS_SUCCESS:
      state = {
        ...state,
        Products: action.payload.Products,
      };
     break;
    case ProductsConstants.PRODUCTS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    // case OrderConstants.ORDER_DELETE:
    //   state.orders = state.orders.filter(
    //     (i) => i.reference !== action.payload.reference
    //   );
    //   break;
  }

  return state;
};
