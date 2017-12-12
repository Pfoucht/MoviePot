import axios from 'axios';
const queryString = require('query-string');

const API_KEY = "c8c12ff224f66ffa946609cac164a7eb";
const ROOT_URL = `https://api.themoviedb.org/3/search/movie?api_key=c8c12ff224f66ffa946609cac164a7eb&language=en-US&page=1&include_adult=false`

export const MOVIE_SEARCHED = "MOVIE_SEARCHED";
export const MOVIE_SELECTED = "MOVIE_SELECTED";
export const MOVIE_ADDED = "MOVIE_ADDED";

export function fetchMovies(term) {
  // create query from search term then create url request to TheMovieDB API
  const termQuery = queryString.stringify({query: term});
  const url = `${ROOT_URL}&${termQuery}`;

  const request = axios.get(url);

  return {
    type: MOVIE_SEARCHED,
    payload: request
  }
}

export function selectMovie(movie) {
  return {
    type: MOVIE_SELECTED,
    payload: movie
  }
}

export function addMovieToPot(movie) {
  return {
    type: MOVIE_ADDED,
    payload: movie
  }
}
