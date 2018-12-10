import React from 'react';
import TodoAdd from '../todoAdd';
import TodoList from '../todoList';

import './todos.css';

const Todos = ({ todoData, onDeleted, onAdd }) => {
  return (
    <div className="todos col-6">
      <div className="todos-card">
        <h2 className="todos-header">Items</h2>
        <div>
          <TodoAdd 
            onAdd={ (text) => onAdd(text) }/>
          <TodoList 
            todoData={ todoData }
            onDeleted={ (id) => onDeleted(id)}/>
        </div>
      </div>
    </div>
  );
}

export default Todos;