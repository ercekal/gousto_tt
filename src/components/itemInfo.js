import React, { Component } from 'react';

export default class ItemInfo extends Component {

  constructor() {
    super()
    this.state = {
      selected: false,

    }
  }

  showDescription() {
    this.setState({
      selected: !this.state.selected
    })
  }

  _selectedItem() {
    if (this.state.selected === true) {
      return "bold"
    } else {
      return "normal"
    }
  }

  render() {
    return (
      <div>
        <a href="#" onClick={this.showDescription.bind(this)}><p style={{fontWeight: this._selectedItem()}}>{this.props.item.title}</p></a>
        {this.state.selected && <p>{this.props.item.description}</p>}
      </div>
    )
  }
}
