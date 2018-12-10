import React from 'react';

import './commentAdd.css';

const CommentAdd = () => {
  return (
    <div className="comments-add">
      <form className="container form-group">
        <div className="row comment-item-wrapper">
          <div className="col-2 comments-add__avatar">
            <a className="comments-add__avatar--img" href="#123"><span></span></a>
          </div>
          <div className="col-10 comments-add__text">
            <textarea className="form-control" rows="4"></textarea>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentAdd;