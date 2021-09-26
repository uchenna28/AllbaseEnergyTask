// import localForage from "localforage";
import axios from '../../helpers/axios';
import { NotificationConstants } from './constants';

export default function getAllNotifications() {
  return async (dispatch) => {
    dispatch({ type: NotificationConstants.START_LOADING });
    try {
      const res = await axios.get('/admin/notifications');
      const { AdminNotifications } = res.data;

      dispatch({
        type: NotificationConstants.IS_SUCCESS,
        payload: AdminNotifications,
      });
    } catch (error) {
      dispatch({
        type: NotificationConstants.IS_ERROR,
        payload: { error: 'Notifications not found' },
      });
    }
  };
}
