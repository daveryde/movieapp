import { GET_TRENDING, SEARCH_ERROR } from 'types';
import axios from 'axios';

export const trendingMovies = () => async dispatch => {
  try {
    const result = await axios.get('/search/trending');
    const results = await result.data.results.json();
    console.log(results);
    dispatch({
      type: GET_TRENDING,
      payload: results
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
