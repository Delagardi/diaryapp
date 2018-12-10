import React, { Component } from 'react';
import Sidebar from '../sidebar';
import Content from '../content';

import './app.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todoData: [
        {id: 1, label: 'First item with custom name'},
        {id: 2, label: 'Second item is active'},
        {id: 3, label: 'Third item example'}
      ]
    }
    this.idTodoFrom = 555;
  }

  

  deleteTodo = (id) => {
    this.setState( ({todoData}) => {
      const index = todoData.findIndex( (element) => element.id === id );

      const before = todoData.slice(0, index);
      const after = todoData.slice(index+1);
      const newArray = [...before, ...after];

      return {
        todoData: newArray
      }
    })
  }

  addTodo = (text) => {
    const newTodo = {
      id: this.idTodoFrom++,
      label: text
    }
    console.log('Added this:', text);

    this.setState( ({ todoData }) => {
      const newArray = [...todoData, newTodo];

      return {
        todoData: newArray
      }
    });
  }
  
  render() {
    return (
      <div className="container-fluid bg-main">
        <div className="container">
          <div className="row">
            <Sidebar/>
            <Content 
              todoData={ this.state.todoData }
              onDeleted={ this.deleteTodo }
              onAdd={ this.addTodo }/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
