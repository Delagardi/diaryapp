import React from 'react';
import TodoAdd from '../todoAdd';
import TodoList from '../todoList';

import './todos.css';

const Todos = ({ todoData, onDeleted, onAddTodo, selectedItem, onActiveSelected, commentsSumByTodo }) => {
  return (
    <div className="todos col-6">
      <div className="todos-card">
        <h2 className="todos-header">Items</h2>
        <div>
          <TodoAdd 
            onAddTodo={ (text) => onAddTodo(text) }/>
          <TodoList 
            todoData={ todoData }
            onDeleted={ (id) => onDeleted(id) }
            selectedItem={ selectedItem }
            onActiveSelected={ (id) => onActiveSelected(id) }
            commentsSumByTodo={ (idTodo) => commentsSumByTodo(idTodo) }
          />
        </div>
      </div>
    </div>
  );
}

export default Todos;