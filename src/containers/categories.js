import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategories, fetchItems, fetchSelectedIt } from '../actions/index';
import ItemList from '../components/ItemList'
import CategoryInfo from '../components/CategoryInfo'

class Categories extends Component {

  constructor() {
    super()
    this.state = {
      selectCategory: ""
    }
  }

  componentWillMount() {
    this.props.fetchCategories()
    this.props.fetchItems()
  }

  selectCategory(category) {
    this.setState({
      selectedCategory: category
    })
  }

  renderItemList() {
    if (this.state.selectedCategory !== "") {
      return (
        <ItemList category={this.state.selectedCategory} items={this.props.items} />
      )
    }
  }

  render() {
    if (!this.props.categories[0]) {
      return(
        <div>
          Loading...
        </div>
      )
    } else {
      return (
        <div>
          <table>
            <thead>
              <tr>
                {this.props.categories[0].map((category) => {
                  return (
                    <th>
                      <CategoryInfo category={category} selectCategory={this.selectCategory.bind(this)}/>
                    </th>
                  )
                })}
              </tr>
            </thead>
          </table>
          {this.renderItemList()}
        </div>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCategories, fetchItems }, dispatch)
}

function mapStateToProps({ categories, items }){
  return { categories, items };
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
