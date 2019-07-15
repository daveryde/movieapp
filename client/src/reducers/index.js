import { combineReducers } from 'redux';
import imgConfig from './imgConfig';
import searchResults from './searchResults';
import upcomingMovies from './upcomingMovies';
import trendingMovies from './trendingMedia';

export default combineReducers({
  imgConfig,
  searchResults,
  upcomingMovies,
  trendingMovies
});
