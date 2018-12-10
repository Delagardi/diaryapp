import React, { Component } from 'react';
import CommentsListItem from '../commentsListItem';

import './commentsList.css'

class CommentsList extends Component {
  render() {
    const { commentsData, selectedItem } = this.props;

    const elements = commentsData.map( (item) => {
      const { id, idTodo, userData, text } = item;
  
      if ( selectedItem === idTodo ) {
        return (
          <CommentsListItem 
            key={ id }
            id={ id }
            userData={ userData }
            text={ text }
          />
        );
      } else {
        return null;
      }
    });
    return(
      <div className="comments-list">
        { elements }
      </div>
    )
  }
}

export default CommentsList;