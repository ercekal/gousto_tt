import React, { Component } from 'react';

export default class CategoryInfo extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <p>
          hello caregory info
        </p>
        // <a href="#" onClick={this.props.selectCategory(this.props.category.title)}><p style={{fontSize: 8}}>{this.props.category.title}</p></a>
      </div>
    )
  }
}
