import React, { Component } from 'react';
import ListItem from './ListItem'
import '../List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [
        { id: 1, title: 'Item 1' },
        { id: 2, title: 'Item 2' },
        { id: 3, title: 'Item 3' },
      ]
    }

    this.loadToDoItems()
  }

  loadToDoItems() {
    fetch('//127.0.0.1:3001')
    .then((response) => response.json())
    .then((payload) => {
      this.setState({
        listItems: payload,
      })
    })
    .catch((e) => {
      console.error('Could not fetch list items', e)
    })
  }

  renderListItems() {
    return this.state.listItems.map((listItem) => {
      return (
        <ListItem item={ listItem }></ListItem>
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
