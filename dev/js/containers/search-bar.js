import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/index';

class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = { term:'' };
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchMovies(this.state.term);
  }

  onInputChange(e) {
    this.setState({term:e.target.value})
  }

  render() {
    return (
      <div className="container mb-3">
        <form onSubmit={(e) => this.onFormSubmit(e)} className="form-inline row dflex justify-content-center">
          <input
            value={this.state.term}
            onChange={(e) => this.onInputChange(e)}
            className="form-control col-sm-5"
            type="text" placeholder="Enter a keyword or movie title"
          />
          <input type="submit" className="btn btn-primary" value="submit"/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
