import React, { Component } from 'react';
import Sidebar from '../sidebar';
import Content from '../content';

import './app.css';

class App extends Component {
  todoData = [
    {id: 1, label: 'First item with custom name'},
    {id: 2, label: 'Second item is active'},
    {id: 3, label: 'Third item example'}
  ];

  render() {
    return (
      <div className="container-fluid bg-main">
        <div className="container">
          <div className="row">
            <Sidebar/>
            <Content todoData={this.todoData}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
