import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategories } from '../actions/index';

class Categories extends Component {
  // renderCategories(categoryData) {
  //   const title = categoryData.title;
  //
  //     return (
  //       <tr key={title}>
  //         <th></td>
  //         <td><Chart data={temps} color="orange" units="C"/></td>
  //         <td><Chart data={press} color="red" units="hPa"/></td>
  //         <td><Chart data={humids} color="blue" units="%"/></td>
  //       </tr>
  //     );
  //   }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            // {this.props.categories.map(this.renderWeather)}
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        // <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ categories }){
  return { categories };
}

export default connect(mapStateToProps)(Categories);
