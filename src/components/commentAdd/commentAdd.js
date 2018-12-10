import React, { Component } from 'react';

import './commentAdd.css';

class CommentAdd extends Component {
  constructor() {
    super();

    this.state = {
      label: ''
    }
  }

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    });
  }

  onSubmitComment = (event) => {
    event.preventDefault();
    this.props.onAddComment(this.state.label);
    this.setState({
      label: ''
    });
  }

  keydownListener = (event) => {
    if (event.keyCode === 13 && event.ctrlKey) this.onSubmitComment(event);
  }

  componentDidMount(){
    document.addEventListener('keydown', this.keydownListener);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.keydownListener);
  }

  render() {
    const { label } = this.state;

    return (
      <div className="comments-add">
        <form 
          className="container form-group"
          onSubmit={ this.onSubmitComment }>
          <div className="row comment-item-wrapper">
            <div className="col-2 comments-add__avatar">
              <a className="comments-add__avatar--img" href="#123"><span></span></a>
            </div>
            <div className="col-10 comments-add__text">
              <textarea 
                className="form-control" 
                rows="4"
                onChange={ this.onLabelChange }
                value={ label }>
                
              </textarea>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentAdd;