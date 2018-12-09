import React from 'react';
import CommentsList from '../commentsList';
import CommentAdd from '../commentAdd';

import './comments.css';

const Comments = () => {
  return (
    <div className="comments col-6">
      <div className="comments-card">
        <h2 className="comments-header">Comments</h2>
        <CommentsList/>
        <CommentAdd/>
      </div>
    </div>
  );
}

export default Comments;