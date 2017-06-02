import React, { Component } from 'react';
import ItemInfo from './ItemInfo'
import { connect } from 'react-redux';

class ItemList extends Component {

  filterSearchTerm(array) {
    if (typeof(this.props.search) !== "undefined") {
      var searchedItems = []
      searchedItems = array.filter((item) => {
        return (item.title.indexOf(this.props.search)!=-1 || item.description.indexOf(this.props.search)!=-1)
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
          no items yet
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
    search: state.search.searchTerm
  }
}

export default connect(mapStateToProps)(ItemList);
