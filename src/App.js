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
        <FontAwesome
          name="caret-left"
        />
        {_.range(0, range).map(val => (
          <div className="box">
            {val}
          </div>
        ))}
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <Paginator range={500} />
    );
  }
}

export default App;
