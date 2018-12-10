import React, { Component } from 'react';
import TodoItem from '../todoItem';

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
    const { todoData } = this.props;

    const elements = todoData.map( (item) => {
      return (
        <TodoItem 
          key={item.id} 
          label={item.label} 
          active={item.active} 
          id={item.id}
          onActiveSelected={this.onItemSelected}
          selectedItem={selectedItem}/>
      );
    });

    return(
      <ul className="todo-list">
        {elements}
      </ul>
    )
  }
}

export default TodoList;