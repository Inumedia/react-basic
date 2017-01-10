import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';
import './App.css';

class Paginator extends Component {
  static propTypes = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    selectedPage: PropTypes.number.isRequired,
    maxPages: PropTypes.number.isRequired
  };

  render() {
    const { selectedPage, itemCount, pageSize, maxPages } = this.props;

    const previousPage = Math.max(selectedPage - 1, 0)
    const totalPages = Math.ceil(itemCount / pageSize)
    const nextPage = Math.floor(selectedPage + 1, totalPages)

    var pages = [
      1,
      2
    ];

    pages[2] = <FontAwesome name="ellipsis-h" />

    const middlePages = maxPages - 6
    const startingMiddlePage = selectedPage - (middlePages / 2)
    for(let page = 0; page < middlePages; ++page) {
      pages[page + 3] = startingMiddlePage + page;
    }

    pages[middlePages + 3] = <FontAwesome name="ellipsis-h" />

    for (let page = totalPages - 2; page < totalPages; ++page) {
      pages[page] = page + 1;
    }

    return (
      <div className="container">
        <span onClick={this.changePage.bind(this, previousPage)}><FontAwesome name="arrow-left" /></span>
        <span className="pages">
          {pages.map(page => <b className={selectedPage === page ? 'activePage box' : 'inactivePage box'}>{page}</b>)}
        </span>
        <span onClick={this.changePage.bind(this, nextPage)}><FontAwesome name="arrow-right" /></span>
        of {totalPages}
      </div>
    );
  }

  changePage(newPage) {
    console.log(newPage)
    this.props.changePage(newPage)
  }
}


class App extends Component {
  state = {
    selectedPage: 20,
    itemCount: 12345,
    pageSize: 25,
    maxPages: 12
  };

  render() {
    const { selectedPage, itemCount, pageSize, maxPages } = this.state
    return (
      <div>
        <div>{selectedPage}</div>
        <Paginator
          changePage={this.changePage.bind(this)}
          itemCount={itemCount}
          pageSize={pageSize}
          selectedPage={selectedPage}
          maxPages={maxPages} />
      </div>
    );
  }

  changePage(newPage) {
    this.setState({
      selectedPage: newPage
    })
  }
}

export default App;
