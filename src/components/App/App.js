import React, { Component } from 'react';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid bg-main">
        <div className="container">
          <div className="row">
            <div className="sidebar">
              <div className="sidebar-header-group">
                <a className="sidebar-header-link" href=".123">
                  <h1 className="sidebar-header">Diary App</h1>
                </a>
                <span className="sidebar-header__comment">Comments with no sence</span>
              </div>
            </div>
            <div className="content">
              <div className="row">
                <div className="todos col-6">
                  <div className="todos-card">
                    <h2 className="todos-header">Items</h2>
                    <div>
                      <form className="todo-add form-group d-flex">
                        <input className="form-control" type="text" placeholder="Type name here..."/>
                        <button className="btn btn-success">Add new</button>
                      </form>
                      <ul className="todo-list">
                        <li className="todo-list__item">
                          <span>First item with custom name</span>
                          <button className="btn btn-outline-danger">Delete</button>
                        </li>
                        <li className="todo-list__item active">
                          <span>Second item is active</span>
                          <button className="btn btn-outline-danger">Delete</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="comments col-6">
                  <div className="comments-card">
                    <h2 className="comments-header">Comments</h2>
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
                    <div className="comments-add">
                      <form className="container form-group">
                        <div className="row comment-item-wrapper">
                          <div className="col-2 comments-add__avatar">
                            {/* eslint-disable */}
                            <a className="comments-add__avatar--img" href="#123"></a>
                            {/* eslint-enable */}
                          </div>
                          <div className="col-10 comments-add__text">
                            <textarea className="form-control" rows="4"></textarea>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
