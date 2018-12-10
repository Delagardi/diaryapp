import React from 'react';
import CommentsList from '../commentsList';
import CommentAdd from '../commentAdd';

import './comments.css';

const Comments = ({ commentsData, selectedItem, onAddComment, commentsSumByTodo }) => {
  return (
    <div className="comments col-6">
      <div className="comments-card">
        <h2 className="comments-header">Comments</h2>
        <CommentsList
          selectedItem={ selectedItem } 
          commentsData={ commentsData }
          commentsSumByTodo={ (idTodo) => commentsSumByTodo(idTodo) }
        />
        <CommentAdd
          onAddComment={ (text) => onAddComment(text) }/>
      </div>
    </div>
  );
}

export default Comments;