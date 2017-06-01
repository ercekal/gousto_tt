import React, { Component } from 'react';
import { selectCategory } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CategoryInfo extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <a href="#" onClick={this.props.selectCategory(this.props.category.title)}><p style={{fontSize: 8}}>{this.props.category.title}</p></a>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCategory }, dispatch)
}

function mapStateToProps({ categories, items, selectedCategory }){
  return { selectedCategory };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryInfo);
