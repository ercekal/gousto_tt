import React, { Component } from 'react';

export default class ItemInfo extends Component {

  constructor() {
    super()
    this.state = {
      showDesc: false
    }
  }

  showDescription() {
    this.setState({
      showDesc: !this.state.showDesc
    })
  }

  render() {
    return (
      <div>
        <a href="#" onClick={this.showDescription.bind(this)}><p>{this.props.item.title}</p></a>
        {this.state.showDesc && <p>{this.props.item.description}</p>}
      </div>
    )
  }
}
