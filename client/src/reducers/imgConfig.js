import { GET_CONFIG } from '../actions/types';

const initialState = {
  url: '',
  backdrop_sizes: [],
  logo_sizes: [],
  poster_sizes: [],
  profile_sizes: [],
  still_sizes: []
};

export default function(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case GET_CONFIG:
      return {
        ...state,
        url: payload.images.secure_base_url,
        backdrop_sizes: payload.images.backdrop_sizes,
        logo_sizes: payload.images.logo_sizes,
        poster_sizes: payload.images.poster_sizes,
        profile_sizes: payload.images.profile_sizes,
        still_sizes: payload.images.still_sizes
      };
    default:
      return {
        ...state
      };
  }
}
