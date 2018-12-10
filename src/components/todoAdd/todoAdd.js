import React, { Component } from 'react';

import './todoAdd.css';

class TodoAdd extends Component {
  constructor() {
    super();

    this.state = {
      label: ''
    }
  }
  
  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    });
  }

  onSubmitTodo = (event) => {
    event.preventDefault();
    this.props.onAddTodo(this.state.label);
    this.setState({
      label: ''
    });
  }

  render() {
    const { label } = this.state;

    return(
      <form 
        className="todo-add form-group d-flex"
        onSubmit={ this.onSubmitTodo }>
        <input 
          className="form-control" 
          type="text" 
          placeholder="Type name here..."
          onChange={ this.onLabelChange }
          value={ label }/>
        <button 
          className="btn btn-success">
          Add new
        </button>
      </form>
    )
  }
}

export default TodoAdd;