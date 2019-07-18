import { GET_CURRENT, SEARCH_ERROR } from './types';
import axios from 'axios';

export const getCurrent = () => async dispatch => {
  try {
    const res = await axios.get('/search');

    dispatch({
      type: GET_CURRENT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: { msg: err.response.data, status: err.response.status }
    });
  }
};
