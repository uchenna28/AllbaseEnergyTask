/* eslint-disable import/prefer-default-export */
import axios from '../../helpers/axios';
import { customersConstants } from './constants';

export function getAllCustomers() {
  // console.log(page);
  return async (dispatch) => {
    dispatch({ type: customersConstants.START_LOADING });
    try {
      // let num;
      // let res = null;
      const res = await axios.get('/customer?page=1&size=2');
      const { Customers } = res.data;
      // if (num) {
      //   res = await axios.get('/customer?page=1&size=2', { headers: { Authorization: localS
      // } else {
      // console.log(totalPages);

      dispatch({
        type: customersConstants.ALLCUSTOMERS_SUCCESS,
        payload: Customers,
        // totalPages,
      });
      // console.log(totalPages);
    } catch (error) {
      dispatch({
        type: customersConstants.ALLCUSTOMERS_FAILURE,
        payload: { error: 'Customers not found' },
      });
    }
  };
}

// export function getPages(num)
// }
