import { MOVIE_SELECTED } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case MOVIE_SELECTED:
      console.log("Inside SelectedMovieReducer, payload is:", action.payload);
      return action.payload;
      break;
  }
  return state;
}
