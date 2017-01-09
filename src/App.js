import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';
import './App.css';

class Paginator extends Component {
  static propTypes = {
    range: PropTypes.number.isRequired,
  };

  render() {
    const { range } = this.props;

    return (
      <div className="container">
      </div>
    );
  }
}


class App extends Component {
  state = {
    selectedPage: 1,
  };

  render() {
    return (
      <div>
        <div>{this.state.selectedPage}</div>
        <Paginator />
      </div>
    );
  }
}

export default App;
