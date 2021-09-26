import axios from '../../helpers/axios';
import { OrderConstants } from './constants';

export function getAllOrders() {
  return async (dispatch) => {
    dispatch({ type: OrderConstants.START_LOADING });

    try {
      const res = await axios.get('/order');
      const { Orders } = res.data;
      // console.log(Orders);

      dispatch({
        type: OrderConstants.IS_SUCCESS,
        payload: Orders,
      });
    } catch (error) {
      dispatch({
        type: OrderConstants.IS_ERROR,
        payload: { error: 'Orders not found' },
      });
    }
  };
}

export const deleteOrder = (reference) => async (dispatch) => {
  dispatch({ type: OrderConstants.ORDER_DELETE, payload: { reference } });
};
