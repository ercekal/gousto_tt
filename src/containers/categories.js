import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategories, fetchItems } from '../actions/index';
import ItemList from '../components/ItemList'
import CategoryInfo from '../components/CategoryInfo'

class Categories extends Component {

  componentWillMount() {
    this.props.fetchCategories()
    this.props.fetchItems()
  }

  componentDidMount() {
    console.log(this.props)
    console.log(this.state);
  }

  renderItemList() {
    if (this.props.selectedCategory !== "") {
      return (
        <ItemList category={this.props.selectedCategory} items={this.props.items} />
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
                      <CategoryInfo key={category.title} category={category} />
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

function mapStateToProps({ categories, items, selectedCategory }){
  return { categories, items, selectedCategory };
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
