import { combineReducers } from 'redux';
import postUpcoming from './upcomingMovies';
import imgConfig from './imgConfig';
import searchResults from './searchResults';
import trendingMedia from './trendingMedia';

export default combineReducers({
  postUpcoming,
  imgConfig,
  searchResults,
  trendingMedia
});
