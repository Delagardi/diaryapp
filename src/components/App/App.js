import React, { Component } from 'react';
import Sidebar from '../sidebar';
import Content from '../content';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid bg-main">
        <div className="container">
          <div className="row">
            <Sidebar/>
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
