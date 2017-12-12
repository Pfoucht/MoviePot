import { combineReducers } from 'redux';
import MovieReducer from './reducer-movies';
import SelectedMovieReducer from './reducer-selected-movie';
import PotReducer from './reducer-pot-movies';

const rootReducer = combineReducers({
  selectedMovie: SelectedMovieReducer,
  movies: MovieReducer,
  moviePot: PotReducer
});

export default rootReducer;
