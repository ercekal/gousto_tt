import React, { Component } from 'react';
import ItemInfo from './ItemInfo'

export default class ItemList extends Component {
  constructor() {
    super()
    this.state ={
      selectedItems: []
    }
  }

  filterItemList() {
    var selectedItems = []
    selectedItems = this.props.items.filter((item) => {
      return item.categories.find((ele) => {
        return ele.title === this.props.selectedCategoryTitle
      })
    })
    return selectedItems
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
          {this.renderFiltered(this.filterItemList())}
        </div>
      )
    }
  }
}
