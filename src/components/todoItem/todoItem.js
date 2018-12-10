import React, { Component } from 'react';

import './todoItem.css';

export default class TodoItem extends Component {

  render() {
    const { label, id, selectedItem } = this.props;
    console.log('id:', id);

    let classNames = 'todo-list__item';

    if (selectedItem === id) {
      classNames += ' active';
    }

    return (
      <li className={ classNames}>
        <span
          onClick={ () => this.props.onActiveSelected(id) }>
          {label}
        </span>
        <button className="btn btn-outline-danger">Delete</button>
      </li>
    )
  }
}