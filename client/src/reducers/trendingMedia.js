import { GET_TRENDING, SEARCH_ERROR } from '../actions/types';

const initialState = {
  results: [],
  errors: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TRENDING:
      return {
        ...state,
        results: payload.results
      };
    case SEARCH_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return {
        ...state
      };
  }
}
