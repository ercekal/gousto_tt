import React, { Component } from 'react';
import ItemInfo from './ItemInfo'
import { connect } from 'react-redux';

class ItemList extends Component {

  filterSearchTerm(array) {
    if (typeof(this.props.search) !== "undefined") {
      var searchedItems = []
      searchedItems = array.filter((item) => {
        return (item.title.toLowerCase().indexOf(this.props.search)!=-1 || item.description.toLowerCase().indexOf(this.props.search)!=-1)
      })
      return searchedItems
    } else {
      return array
    }
  }

  renderFiltered(array) {
    if (array.length > 0) {
      return array.map((item) => {
        return <ItemInfo item={item} key={item.id} />
      })
    }
  }
  render() {
    if(!this.props.items) {
      return (
        <div>
          Loading...
        </div>
      )
    } else {
      return (
        <div>
          {this.renderFiltered(this.filterSearchTerm(this.props.items))}
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    search: state.search.searchTerm,
    selectedCategory: state.selectedCategory.selectedTitle
  }
}

export default connect(mapStateToProps)(ItemList);
