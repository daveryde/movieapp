import { GET_CURRENT, SEARCH_ERROR } from './types';
import axios from 'axios';

export const getCurrent = () => async dispatch => {
  try {
    const response = await axios.get('/search');

    dispatch({
      type: GET_CURRENT,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: { msg: err }
    });
  }
};
