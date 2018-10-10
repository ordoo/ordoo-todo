import React, { Component } from 'react';
import ListItem from './ListItem'
import '../List.css';

class List extends Component {
  renderListItems() {
    return this.props.listItems.map((listItem) => {
      return (
        <ListItem onRemove={ this.props.onRemove } item={ listItem }></ListItem>
      )
    })
  }

  render() {
    return (
      <ul className="List">
        { this.renderListItems() }
      </ul>
    );
  }
}

export default List;
