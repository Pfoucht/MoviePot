import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectMovie, addMovieToPot } from '../actions/index';

import MovieDisplay from '../components/movie-display';
import RelatedMovies from '../components/related-movies';

class MovieResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.movies) {
      // if a movie hasn't been selected yet, default preview to first movie in the movie array
      let displayedMovie = (this.props.selectedMovie) ? this.props.selectedMovie : this.props.movies[0];

      return (
        <div className="container mb-5">
          <MovieDisplay className movie={displayedMovie} addMovieToPot={this.props.addMovieToPot}/>
          <RelatedMovies movies={this.props.movies} movieSelect={this.props.selectMovie}/>
        </div>
      )
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    selectedMovie: state.selectedMovie
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectMovie, addMovieToPot }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieResults);
