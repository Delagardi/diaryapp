import React from 'react';
//import ItemTodo from '../itemTodo';

import './todoList.css';

const TodoList = () => {
  return(
    <ul className="todo-list">
      <li className="todo-list__item">
        <span>First item with custom name</span>
        <button className="btn btn-outline-danger">Delete</button>
      </li>
      <li className="todo-list__item active">
        <span>Second item is active</span>
        <button className="btn btn-outline-danger">Delete</button>
      </li>
    </ul>
  )
}

export default TodoList;