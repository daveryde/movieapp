import { GET_CONFIG, SEARCH_ERROR } from './types';
import axios from 'axios';

export const getConfig = () => async dispatch => {
  try {
    const res = await axios.get('/images');

    dispatch({
      type: GET_CONFIG,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
