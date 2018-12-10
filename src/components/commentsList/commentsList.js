import React from 'react';
import CommentsListItem from '../commentsListItem';

import './commentsList.css'

const CommentsList = ({ commentsData }) => {
  const elements = commentsData.map( (item) => {
    const { id, userData, text } = item;

    return (
      <CommentsListItem 
        key={id}
        id={id}
        userData={userData}
        text={text}
      />
    );
  });
  return(
    <div className="comments-list">
      {elements}
    </div>
  )
}

export default CommentsList;