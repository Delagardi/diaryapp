import React, { Component } from 'react';
import Todos from '../todos';
import Comments from '../comments';

import './content.css';

class Content extends Component {
  constructor() {
    super();

    this.state = {
      selectedItem: null
    }
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    })
  }

  render() {
    const { todoData, onDeleted, onAdd, commentsData } = this.props;
    const { selectedItem } = this.state;
  
    return (
      <div className="content">
        <div className="row">
          <Todos 
            todoData={ todoData }
            onDeleted={ (id) => onDeleted(id) }
            onAdd={ (text) => onAdd(text) }
            selectedItem={selectedItem}
            onActiveSelected={ (id) => this.onItemSelected(id)}
          />
          <Comments 
            commentsData={ commentsData }
            selectedItem= { selectedItem }
          />
        </div>
      </div>
    );
  }
}

export default Content;