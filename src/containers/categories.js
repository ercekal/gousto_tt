import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategories, fetchItems } from '../actions/index';
import ItemList from '../components/ItemList'
import SearchBar from '../containers/search_bar';
import CategoryInfo from '../components/CategoryInfo'

class Categories extends Component {

  componentWillMount() {
    this.props.fetchCategories()
    this.props.fetchItems()
  }

  renderItemList() {
    let allItems = this.props.items
    let selectedItems = []
    if (this.props.selectedCategory !== "" && typeof(allItems) !== "undefined" && allItems.length > 0) {
      selectedItems = allItems.filter((item) => {
        return item.categories.find((ele) => {
          return ele.title === this.props.selectedCategory
        })
      })
      return <ItemList selectedCategoryTitle={this.props.selectedCategory} items={selectedItems} />
    }
  }

  render() {
    if (!this.props.categories) {
      return(
        <div>
          Loading...
        </div>
      )
    } else {
      console.log(this.props);
      return (
        <div>
          <table>
            <thead>
              <tr>
                {this.props.categories.map((category) => {
                  return (
                    <th>
                      <CategoryInfo key={category.title} category={category} />
                    </th>
                  )
                })}
              </tr>
            </thead>
          </table>
          <div>
            <SearchBar />
          </div>
          {this.renderItemList()}
        </div>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCategories, fetchItems }, dispatch)
}

function mapStateToProps(state) {
  return {
    categories: state.categories.categories,
    items: state.items.items,
    selectedCategory: state.selectedCategory.selectedTitle,
    search: state.search.searchTerm
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
