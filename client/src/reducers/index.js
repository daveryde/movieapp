import { combineReducers } from 'redux';
import postUpcoming from './upcomingMovies';
import imgConfig from './imgConfig';

export default combineReducers({
  postUpcoming,
  imgConfig
});
