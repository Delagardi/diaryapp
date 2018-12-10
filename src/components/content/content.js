import React, { Component } from 'react';
import Todos from '../todos';
import Comments from '../comments';

import './content.css';

class Content extends Component {
  render() {
    const { todoData, 
            onDeleted, 
            onAddTodo, 
            commentsData,
            onAddComment,
            onActiveSelected,
            selectedItem } = this.props;
  
    return (
      <div className="content">
        <div className="row">
          <Todos 
            todoData={ todoData }
            onDeleted={ (id) => onDeleted(id) }
            onAddTodo={ (text) => onAddTodo(text) }
            selectedItem={ selectedItem }
            onActiveSelected={ (id) => onActiveSelected(id)}
          />
          <Comments 
            commentsData={ commentsData }
            selectedItem={ selectedItem }
            onAddComment={ (text) => onAddComment(text) }
          />
        </div>
      </div>
    );
  }
}

export default Content;