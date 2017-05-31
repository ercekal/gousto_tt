import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
  
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
      </table>
    );
  }
}

function mapStateToProps({ categories }){
  return { categories };
}

export default connect(mapStateToProps)(SearchBar);
