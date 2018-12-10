import React from 'react';
import Todos from '../todos';
import Comments from '../comments';

import './content.css';

const Content = ({ todoData }) => {
  
  return (
    <div className="content">
      <div className="row">
        <Todos todoData={todoData}/>
        <Comments />
      </div>
    </div>
  );
}

export default Content;