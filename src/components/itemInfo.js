import React, { Component } from 'react';

export default class ItemInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDesc: false
    }
  }
  render() {
    return (
      <div>
        {props.title}
        {props.description}
      </div>
    )
  }
}
