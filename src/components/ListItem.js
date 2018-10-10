import React, { Component } from 'react';
import '../ListItem.css';

class ListItem extends Component {
  removeItem() {
    fetch(`//127.0.0.1:3001/${this.props.item.id}`, {
      method: 'DELETE',
    })
    .then((payload) => {
      if(this.props.onRemove) {
        this.props.onRemove(this.props.item.id)
      }
    })
    .catch((e) => {
      console.error('Could not fetch list items', e)
    })
  }

  render() {
    return (
      <li className="ListItem">
        <p>
          { this.props.item.title }
          <button onClick={ this.removeItem.bind(this) }>Remove</button>
        </p>
      </li>
    );
  }
}

export default ListItem;
