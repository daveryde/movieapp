import { GET_TRENDING, SEARCH_ERROR } from './types';
import axios from 'axios';

export const getTrending = () => async dispatch => {
  try {
    const result = await axios.get('/search/trending');

    dispatch({
      type: GET_TRENDING,
      payload: result.data
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: { msg: err.response.data, status: err.response.status }
    });
  }
};
