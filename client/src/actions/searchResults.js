import { SEARCH_QUERY, SEARCH_ERROR } from './types';
import axios from 'axios';

export const multiSearch = keyword => async dispatch => {
  try {
    const response = await axios.get(
      `/search/multisearch/${encodeURI(keyword)}`
    );

    dispatch({
      type: SEARCH_QUERY,
      payload: { ...response.data, keyword }
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: { msg: err }
    });
  }
};
