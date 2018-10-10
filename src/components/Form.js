import React, { Component } from 'react';
import '../Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  createToDo() {
    fetch('//127.0.0.1:3001', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state),
    })
    .then((response) => response.json())
    .then((payload) => {
      if(this.props.onCreate) {
        this.props.onCreate(payload)
      }
    })
    .catch((e) => {
      console.error('Could not fetch list items', e)
    })
  }

  onSubmit(e) {
    e.preventDefault()
    this.createToDo()
  }

  onInputValueChange(e) {
    this.setState({
      title: e.target.value,
    })
  }

  render() {
    return (
      <div className="Form">
        <form onSubmit={ this.onSubmit.bind(this) }>
          <input value={ this.state.title } onChange={ this.onInputValueChange.bind(this) } type="text"/>
          <input type="submit" value="Add To Do" disabled={ this.state.title.length == 0 } />
        </form>
      </div>
    );
  }
}

export default Form;
