import React, { Component } from 'react';

import './todoListItem.css';

export default class TodoListItem extends Component {

  render() {
    const { label, id, selectedItem, onDeleted } = this.props;

    let classNames = "todo-list__item-wrapper d-flex flex-wrap justify-content-start align-items-center ";

    if (selectedItem === id) {
      classNames += ' active';
    }

    return (
      <li className= "todo-list__item d-flex align-items-center" >
        <div className={ classNames } >
          <span
            className="todo-list__item-text"
            onClick={ () => this.props.onActiveSelected(id) }>
            { label }
          </span>
          <span className="badge badge-pill badge-info">
            0</span>
        </div>
        <button 
          className="btn btn-outline-danger"
          onClick={ onDeleted }>Delete</button>
      </li>
    )
  }
}