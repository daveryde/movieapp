import { GET_CONFIG, SEARCH_ERROR } from './types';
import axios from 'axios';

export const getConfig = () => async dispatch => {
  try {
    const response = await axios.get('/images');

    dispatch({
      type: GET_CONFIG,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: { msg: err }
    });
  }
};
