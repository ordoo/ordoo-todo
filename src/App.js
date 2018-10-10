import React, { Component } from 'react';
import { find, indexOf } from 'lodash';
import List from './components/List';
import Form from './components/Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: []
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

  onCreate(payload) {
    this.setState({
      listItems: [...this.state.listItems, payload]
    })
  }

  onRemove(id) {
    this.setState({
      listItems: this.state.listItems.filter(listItem => listItem.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Ordoo To Do!</h1>
          <Form onCreate={ this.onCreate.bind(this) }></Form>
          <List onRemove={ this.onRemove.bind(this) } listItems={ this.state.listItems }></List>
        </header>
      </div>
    );
  }
}

export default App;
