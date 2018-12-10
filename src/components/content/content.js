import React from 'react';
import Todos from '../todos';
import Comments from '../comments';

import './content.css';

const Content = ({ todoData, onDeleted, onAdd, commentsData }) => {
  
  return (
    <div className="content">
      <div className="row">
        <Todos 
          todoData={ todoData }
          onDeleted={ (id) => onDeleted(id) }
          onAdd={ (text) => onAdd(text) }/>
        <Comments 
          commentsData={ commentsData }
        />
      </div>
    </div>
  );
}

export default Content;