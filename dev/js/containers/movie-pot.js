import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { selectMovie } from '../actions';

import MovieItem from '../components/movie-item';

class MoviePot extends Component {
  constructor(props) {
    super(props);

    this.state = {lotteryIndex: -1};
    this.selectAMovie = this.selectAMovie.bind(this);
  }

  selectAMovie() {
    let randomIndex = Math.floor(Math.random() * this.props.moviePot.length);
    console.log("random index is:", randomIndex);
    this.setState({lotteryIndex:randomIndex});
  }

  render() {
    if (this.props.moviePot.length == 0) {
      return (
        <section className="container-fluid section-movie-pot mb-3 justify-content-center align-items-center">
          <div className="row h-100 justify-content-center align-items-center">
            <p className="text-center lead align-middle">No movies in your pot. Search and browse movies below.</p>
          </div>
        </section>
      )
    } else {
      const movieList = this.props.moviePot.map((movie, index) =>
        <MovieItem movie={movie} key={movie.title} movieSelect={this.props.selectMovie} highlight={this.state.lotteryIndex == index ? true : false}/>
      );

      return (
        <section className="container-fluid section-movie-pot overflow mb-3 pb-3">
            { movieList }
            <br/>
            <div className="text-center">
              <button
                onClick={this.selectAMovie}
                className="btn btn-primary">Select a movie from the pot</button>
            </div>
        </section>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    moviePot: state.moviePot
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectMovie}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePot);
