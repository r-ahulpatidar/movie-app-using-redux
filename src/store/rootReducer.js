import { combineReducers } from 'redux';
import movieReducer from './movies/reducer';


export default combineReducers({
  movie: movieReducer,
});
