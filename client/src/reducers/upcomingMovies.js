import { GET_CURRENT, SEARCH_RES, SEARCH_ERROR } from '../actions/types';

const initialState = {
  results: [],
  error: {},
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CURRENT:
      return {
        ...state,
        results: payload,
        loading: false
      };
    case SEARCH_RES:
      return {
        ...state,
        results: { ...state.result, payload },
        loading: false
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
