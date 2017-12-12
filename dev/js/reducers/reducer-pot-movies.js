import { MOVIE_ADDED } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case MOVIE_ADDED:
      let moviePot = state.slice(0);
      moviePot.push(action.payload);
      return moviePot;
  }
  return state;
}
