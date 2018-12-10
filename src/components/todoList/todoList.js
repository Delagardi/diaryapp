import React, { Component } from 'react';
import TodoListItem from '../todoListItem';

import './todoList.css';

class TodoList extends Component {

  render() {
    const { todoData, onDeleted, selectedItem, onActiveSelected } = this.props;

    const elements = todoData.map( (item) => {
      const { id, label } = item;

      return (
        <TodoListItem 
          key={id} 
          label={label} 
          id={id}
          onActiveSelected={ (id) => onActiveSelected(id)}
          selectedItem={ selectedItem }
          onDeleted={ () => onDeleted(id) }/>
      );
    });

    return(
      <ul className="todo-list">
        { elements }
      </ul>
    )
  }
}

export default TodoList;