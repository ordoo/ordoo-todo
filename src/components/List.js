import React, { Component } from 'react';
import ListItem from './ListItem'
import '../List.css';

class List extends Component {
  render() {
    return (
      <ul className="List">
        <ListItem></ListItem>
      </ul>
    );
  }
}

export default List;
