import axios from '../../helpers/axios';
import { VendorConstants } from './constants';

export default function getAllVendors() {
  return async (dispatch) => {
    dispatch({ type: VendorConstants.START_LOADING });

    try {
      const res = await axios.get('/vendor');
      const { vendors } = res.data;
      // console.log('totalPages => ', totalPages);
      // console.log('totalPages => ', totalPages);

      dispatch({
        type: VendorConstants.IS_SUCCESS,
        payload: vendors,
      });
    } catch (error) {
      dispatch({
        type: VendorConstants.IS_ERROR,
        payload: { error: 'Vendors not found' },
      });
    }
  };
}
