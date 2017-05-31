import React, { Component } from 'react';
import axios from 'axios'
import ItemInfo from './ItemInfo'

class ItemList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }


  render() {
    console.log(this.props)
    return (
      <div>
        item List
      </div>
    )
  }
}
