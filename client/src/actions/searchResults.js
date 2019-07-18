import { SEARCH_QUERY, SEARCH_ERROR } from './types';
import axios from 'axios';

export const multiSearch = (keyword, history) => async dispatch => {
  try {
    const response = await axios.get(
      `/search/multisearch/${encodeURI(keyword)}`
    );

    dispatch({
      type: SEARCH_QUERY,
      payload: { ...response.data, keyword }
    });

    history.push('/searchView');
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: { msg: err }
    });
  }
};
