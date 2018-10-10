import React, { Component } from 'react';
import List from './components/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Ordoo To Do!</h1>
          <List></List>
        </header>
      </div>
    );
  }
}

export default App;
