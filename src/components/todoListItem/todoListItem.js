import React, { Component } from 'react';

import './todoListItem.css';

export default class TodoListItem extends Component {

  render() {
    const { label, id, selectedItem, onDeleted } = this.props;

    let classNames = 'todo-list__item';

    if (selectedItem === id) {
      classNames += ' active';
    }

    return (
      <li className={ classNames}>
        <span
          onClick={ () => this.props.onActiveSelected(id) }>
          { label }
        </span>
        <button 
          className="btn btn-outline-danger"
          onClick={ onDeleted }>Delete</button>
      </li>
    )
  }
}