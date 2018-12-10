import React, { Component } from 'react';
import TodoListItem from '../todoListItem';

import './todoList.css';

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      selectedItem: null
    }
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    })
  }

  render() {
    const { selectedItem } = this.state;
    const { todoData, onDeleted } = this.props;

    const elements = todoData.map( (item) => {
      const { id, label, active } = item;

      return (
        <TodoListItem 
          key={id} 
          label={label} 
          active={active} 
          id={id}
          onActiveSelected={this.onItemSelected}
          selectedItem={selectedItem}
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