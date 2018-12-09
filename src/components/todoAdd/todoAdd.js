import React, { Component } from 'react';

import './todoAdd.css';

class TodoAdd extends Component {
  render() {
    return(
      <form className="todo-add form-group d-flex">
        <input className="form-control" type="text" placeholder="Type name here..."/>
        <button className="btn btn-success">Add new</button>
      </form>
    )
  }
}

export default TodoAdd;