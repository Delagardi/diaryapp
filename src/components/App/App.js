import React, { Component } from 'react';
import Sidebar from '../sidebar';
import Content from '../content';

import './app.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedItem: null,
      todoData: [
        {id: 1, label: 'First item with custom name'},
        {id: 2, label: 'Second item is active'},
        {id: 3, label: 'Third item example'}
      ],
      commentsData: [
        {id: 1, idTodo: 2, userData: 'user1', text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s'},
        {id: 2, idTodo: 2, userData: 'user2', text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s'},
        {id: 3, idTodo: 2, userData: 'user1', text: 'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s'},
      ]
    }
    this.idTodoFrom = 555;
    this.idCommentFrom = 1555;
  }

  componentWillMount() {
    localStorage.getItem('selectedItem') && this.setState({
      selectedItem: JSON.parse(localStorage.getItem('selectedItem'))
    })

    localStorage.getItem('commentsData') && this.setState({
      commentsData: JSON.parse(localStorage.getItem('commentsData'))
    });

    localStorage.getItem('todoData') && this.setState({
      todoData: JSON.parse(localStorage.getItem('todoData'))
    });
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('selectedItem', null);
    localStorage.setItem('todoData', JSON.stringify(nextState.todoData));
    localStorage.setItem('commentsData', JSON.stringify(nextState.commentsData));
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    })
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

    this.setState( ({ todoData }) => {
      const newArray = [...todoData, newTodo];

      return {
        todoData: newArray
      }
    });
  }

  addComment = (text) => {
    const newComment = {
      id: this.idCommentFrom++,
      idTodo: this.state.selectedItem,
      userData: 'userMain',
      text
    }

    this.setState(({ commentsData }) => {
      
      const newArray = [...commentsData, newComment];

      return {
        commentsData: newArray
      }
    });
  }
  
  render() {
    const { selectedItem } = this.state;

    return (
      <div className="container-fluid bg-main">
        <div className="container">
          <div className="row">
            <Sidebar/>
            <Content 
              selectedItem={ selectedItem }
              todoData={ this.state.todoData }
              onDeleted={ this.deleteTodo }
              onAddTodo={ this.addTodo }
              commentsData={ this.state.commentsData }
              onAddComment={ this.addComment }
              onActiveSelected={ this.onItemSelected }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
