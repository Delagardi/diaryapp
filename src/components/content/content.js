import React from 'react';
import Todos from '../todos';
import Comments from '../comments';

import './content.css';

const Content = () => {
  return (
    <div className="content">
      <div className="row">
        <Todos />
        <Comments />
      </div>
    </div>
  );
}

export default Content;