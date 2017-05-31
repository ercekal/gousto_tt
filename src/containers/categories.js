import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategories } from '../actions/index';

class Categories extends Component {

  componentWillMount() {
    this.props.fetchCategories()
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    if (!this.props.categories[0]) {
      return(
        <div>
          Loading...
        </div>
      )
    } else {
      console.log(this.props.categories);
      return (
        <div>
          <table>
            <thead>
              <tr>
                {this.props.categories[0].map((category) => {
                  return <th>
                    <p key={category.title}>{category.title}</p>
                  </th>
                })}
              </tr>
            </thead>
          </table>
        </div>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCategories }, dispatch)
}

function mapStateToProps({ categories }){
  return { categories };
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
