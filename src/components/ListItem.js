import React, { Component } from 'react';
import '../ListItem.css';

class ListItem extends Component {
  render() {
    return (
      <li className="ListItem">
        <p>{ this.props.item.title }</p>
      </li>
    );
  }
}

export default ListItem;
