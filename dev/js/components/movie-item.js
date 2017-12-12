import React from 'react';

const movie_image = `http://image.tmdb.org/t/p/w500/`;

function MovieItem(props) {
  return (
    <div
    className={"card card-width col-sm-4 col-md-2 d-inline-block mb-4"
    + ((props.highlight) ? " movie-highlight" : "")}
    onClick={() => props.movieSelect(props.movie)}>
      <img className="card-img-top" src={`${movie_image}${props.movie.poster_path}`} alt={`${props.movie.title} movie poster`}/>
      <div className="card-body">
        <p className="card-text movie-item movie-item-text">{props.movie.title}</p>
      </div>
  </div>
    // <div
    // onClick={() => props.movieSelect(props.movie)}
    // className={"movie-item col-sm-4 col-md-2 mb-3 d-inline-block p-2"
    // + ((props.highlight) ? " movie-highlight" : "")
    // }>
    //   <p className="font-weight-light movie-item-text">{props.movie.title}</p>
    //   <img className="movie-item-image" src={`${movie_image}${props.movie.poster_path}`} height="250"/>
    // </div>
  )
}

export default MovieItem;
