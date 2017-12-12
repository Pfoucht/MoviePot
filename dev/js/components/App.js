import React, { Component } from "react";
require("../../scss/style.scss");

// component imports
import Nav from './nav';
import MoviePot from '../containers/movie-pot';
import SearchBar from '../containers/search-bar';
import MovieResults from '../containers/movie-results';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <MoviePot/>
        <SearchBar/>
        <MovieResults/>
      </div>
    )
  }
}

export default App;
