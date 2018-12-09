import React from 'react';

import './commentsList.css'

const CommentsList = () => {
  return(
    <div className="comments-list">
      <div className="container comments-item user1">
        <div className="row comment-item-wrapper">
          <div className="col-2 comments-item__avatar">
            {/* eslint-disable */}
            <a className="comments-item__avatar--img" href="some.html"></a>
            {/* eslint-enable */}
          </div>
          <div className="col-10 comment-item__text">
            <span className="comment-item__text-info">A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s</span>
          </div>
        </div>
      </div>
      <div className="container comments-item user2">
        <div className="row comment-item-wrapper">
          <div className="col-2 comments-item__avatar">
            {/* eslint-disable */}
            <a className="comments-item__avatar--img" href="some.html"></a>
            {/* eslint-enable */}
          </div>
          <div className="col-10 comment-item__text">
            <span className="comment-item__text-info">A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s</span>
          </div>
        </div>
      </div>
      <div className="container comments-item user1">
        <div className="row comment-item-wrapper">
          <div className="col-2 comments-item__avatar">
            {/* eslint-disable */}
            <a className="comments-item__avatar--img" href="#123"></a>
            {/* eslint-enable */}
          </div>
          <div className="col-10 comment-item__text">
            <span className="comment-item__text-info">A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentsList;