import React, { Component } from 'react';
import { selectCategory } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CategoryInfo extends Component {

  constructor() {
    super()
    this.state = {
      fontWeight: 'normal'
    }
  }

  _categorySelect() {
    this.props.selectCategory(this.props.category.title)
  }

  _selectedCategory() {
    if (this.props.selectedCategory === this.props.category.title) {
      return 'bold'
    } else {
      return 'normal'
    }
  }

  render() {
    return (
      <div>
        <a href="#" onClick={this._categorySelect.bind(this)}><p style={{fontSize: 10, paddingRight: 5, fontWeight: this._selectedCategory() }}>{this.props.category.title}</p></a>
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
