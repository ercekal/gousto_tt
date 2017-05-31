import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import Categories from '../containers/categories';


export default class App extends Component {
  render() {
    return (
      <div>
        <Categories />
        <SearchBar />
        <p>
          hello
        </p>
      </div>
    );
  }
}
