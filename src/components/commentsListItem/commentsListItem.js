import React from 'react';

import './commentsListItem.css';

const CommentsListItem = ({id, userData, text}) => {
  let classNames = `container comments-item ${userData}`;
  
  return (
    <div className={classNames}>
      <div className="row comment-item-wrapper">
        <div className="col-2 comments-item__avatar">
          {/* eslint-disable */}
          <a className="comments-item__avatar--img" href="some.html"></a>
          {/* eslint-enable */}
        </div>
        <div className="col-10 comment-item__text">
          <span className="comment-item__text-info">{text}</span>
        </div>
      </div>
    </div>
  );
}

export default CommentsListItem;