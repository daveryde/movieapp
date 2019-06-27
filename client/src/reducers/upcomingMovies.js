import { GET_CURRENT, SEARCH_RES, SEARCH_ERROR } from '../actions/types';

const initialState = {
  results: [],
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CURRENT:
      return {
        ...state,
        results: payload
      };
    case SEARCH_RES:
      return {
        ...state,
        results: { ...state.result, payload }
      };
    case SEARCH_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
}
