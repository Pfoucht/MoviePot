import React, { Component } from 'react';

export default class MovieSearched extends Component {
  render() {
    const movie_image = `http://image.tmdb.org/t/p/w500/`
    console.log(this.props.movie);
    return (
      <div className="row mb-4 p-4">
        <div className="offset-sm-1 col-sm-4">
          <img className="img-fluid" src={`${movie_image}${this.props.movie.poster_path}`}/>
        </div>
        <div className="col-sm-6">
          <h1 className="lead mb-3">{this.props.movie.title}</h1>
          <p className="font-weight-light">Average Rating: <span className="font-weight-bold">{this.props.movie.vote_average}/10</span></p>
          <p className="font-weight-light">Release Date: <span className="font-weight-bold">{this.props.movie.release_date}</span></p>
          <p className="font-weight-light">Overview</p>
          <p className="font-weight-light">{this.props.movie.overview}</p>
          <button onClick={() => this.props.addMovieToPot(this.props.movie)} className="btn btn-primary">Add to movie pot</button>
        </div>
      </div>
    )
  }
}
