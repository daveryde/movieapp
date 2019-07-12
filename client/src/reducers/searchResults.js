import { SEARCH_QUERY, SEARCH_ERROR } from '../actions/types';

const initialState = {
  search_history: [],
  results: [],
  errors: {}
};

export default function(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case SEARCH_QUERY:
      return {
        ...state,
        search_history: [payload.keyword, ...state.search_history],
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
