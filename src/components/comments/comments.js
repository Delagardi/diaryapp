import React from 'react';
import CommentsList from '../commentsList';
import CommentAdd from '../commentAdd';

import './comments.css';

const Comments = ({ commentsData, selectedItem, onAddComment, commentsSumByTodo }) => {
  
  const contentView = !selectedItem ? <ComentsNoView/> : <CommentAdd onAddComment={ (text) => onAddComment(text) }/>
  
  return (
    <div className="comments col-6">
      <div className="comments-card">
        <h2 className="comments-header">Comments</h2>
        <CommentsList
          selectedItem={ selectedItem } 
          commentsData={ commentsData }
          commentsSumByTodo={ (idTodo) => commentsSumByTodo(idTodo) }
        />
        {contentView}
      </div>
    </div>
  );
}

const ComentsNoView = () => {
  return(
    <React.Fragment>
      <span>Please select an item from the list on the left</span>
    </React.Fragment>
  )
}

export default Comments;