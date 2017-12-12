import React, { Component } from 'react';
import MovieItem from './movie-item';

export default class RelatedMovies extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const movieList = this.props.movies.map((movie) =>
      <MovieItem movie={movie} key={movie.title} movieSelect={this.props.movieSelect}/>
    );

    return (
        <div className="row">
        { movieList }
        </div>
    )
  }
}
