import React from 'react';

import './commentsListItem.css';

const CommentsListItem = ({id, userData, text}) => {
  let classNames = `${ userData } comments-item__avatar--img`;
  
  return (
    <div className="container comments-item">
      <div className="row comment-item-wrapper">
        <div className="col-2 comments-item__avatar">
          <a className={ classNames } href="some.html"><span></span></a>
        </div>
        <div className="col-10 comment-item__text">
          <span className="comment-item__text-info">{ text }</span>
        </div>
      </div>
    </div>
  );
}

export default CommentsListItem;