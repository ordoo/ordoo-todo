import React, { Component } from 'react';
import List from './components/List';
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Ordoo To Do!</h1>
          <List listItems={ this.state.listItems }></List>
        </header>
      </div>
    );
  }
}

export default App;
