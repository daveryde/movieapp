import {
  SEARCH_MOVIEID,
  SEARCH_TRAILERS,
  SEARCH_QUERY,
  SEARCH_ERROR
} from './types';
import axios from 'axios';

export const getMovieById = movieId => async dispatch => {
  try {
    const response = await axios.get(`/search/movie/${movieId}`);

    dispatch({
      type: SEARCH_MOVIEID,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: { msg: err }
    });
  }
};

export const multiSearch = keyword => async dispatch => {
  try {
    const response = await axios.get(`/search/multisearch/${keyword}`);

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

export const getMovieTrailers = movieId => async dispatch => {
  try {
    const response = await axios.get(`/search/movie/${movieId}/trailers`);

    dispatch({
      type: SEARCH_TRAILERS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: { msg: err }
    });
  }
};
