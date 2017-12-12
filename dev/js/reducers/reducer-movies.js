import { MOVIE_SEARCHED } from '../actions/index';

export default function(state = null, action){
  switch (action.type) {
    case MOVIE_SEARCHED:
      // if valid movie found
      if (action.payload.data.results.length > 0) {
        return action.payload.data.results;
      } else {
        return null;
      }
  }
  return state;
}
