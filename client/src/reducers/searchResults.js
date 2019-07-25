import {
  SEARCH_MOVIEID,
  SEARCH_TRAILERS,
  SEARCH_QUERY,
  SEARCH_ERROR
} from '../actions/types';

const initialState = {
  search_history: [],
  results: [],
  item_details: {},
  movie_trailers: [],
  loading: true,
  errors: {}
};

export default function(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case SEARCH_MOVIEID:
      return {
        ...state,
        item_details: payload,
        loading: false
      };
    case SEARCH_TRAILERS:
      return {
        ...state,
        movie_trailers: payload.results,
        loading: false
      };
    case SEARCH_QUERY:
      return {
        ...state,
        search_history: [payload.keyword, ...state.search_history],
        results: payload.results,
        loading: false
      };
    case SEARCH_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return {
        ...state,
        loading: false
      };
  }
}
