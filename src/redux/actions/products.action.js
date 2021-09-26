/* eslint-disable import/prefer-default-export */
import axios from '../../helpers/axios';
import { ProductsConstants } from './constants';

export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: ProductsConstants.PRODUCTS_REQUEST });
  const token = localStorage.getItem('token');

  const res = await axios.get('/product', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 200) {
    const { products } = res.data;

    dispatch({
      type: ProductsConstants.PRODUCTS_SUCCESS,
      payload: { Products: products },
    });
  } else {
    dispatch({
      type: ProductsConstants.PRODUCTS_FAILURE,
      payload: { error: 'list not found' },
    });
  }
};

// export const deleteOrder = (reference) => {
//   return async (dispatch) => {
//     dispatch({ type: OrderConstants.ORDER_DELETE, payload: { reference } });
//   };
// };
