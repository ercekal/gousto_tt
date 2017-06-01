import React, { Component } from 'react';
import { selectCategory } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CategoryInfo extends Component {

  _categorySelect() {
    this.props.selectCategory(this.props.category.title)
  }

  render() {
    return (
      <div>
        <a href="#" onClick={this._categorySelect.bind(this)}><p style={{fontSize: 8}}>{this.props.category.title}</p></a>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCategory }, dispatch)
}
function mapStateToProps(state) {
  return {
    selectedCategory: state.selectedCategory.selectedTitle
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryInfo);
