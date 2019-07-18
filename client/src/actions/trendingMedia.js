import { GET_TRENDING, SEARCH_ERROR } from './types';
import axios from 'axios';

export const getTrending = () => async dispatch => {
  try {
    const response = await axios.get('/search/trending');

    dispatch({
      type: GET_TRENDING,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: { msg: err }
    });
  }
};
