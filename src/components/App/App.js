import React, { Component } from 'react';
import Sidebar from '../sidebar';
import Content from '../content';
import ls from 'local-storage';

import './app.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      idTodoFrom: 555,
      idCommentFrom: 1555,
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
    
  }

  componentDidMount() {
    this.setState(({ idTodoFrom, idCommentFrom, selectedItem, todoData, commentsData }) => {
      return({
        idTodoFrom: ls.get('idTodoFrom') || idTodoFrom,
        idCommentFrom: ls.get('idCommentFrom') || idCommentFrom,
        selectedItem: ls.get('selectedItem') || null,
        todoData: ls.get('todoData') || todoData,
        commentsData: ls.get('commentsData') || commentsData
      })
    });
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    })
    ls.set('selectedItem', id);
  }

  deleteComments = (idTodo) => {
    this.setState( ({ commentsData }) => {
      const newArray = commentsData.filter( (element) => element.idTodo !== idTodo)
      
      ls.set('commentsData', newArray);
      return {
        commentsData: newArray
      }
    });
  }

  deleteTodo = (id) => {
    this.setState( ({ todoData }) => {
      const index = todoData.findIndex( (element) => element.id === id );

      const before = todoData.slice(0, index);
      const after = todoData.slice(index+1);
      const newArray = [...before, ...after];
      
      this.deleteComments(id);
      
      ls.set('todoData', newArray);
      return {
        todoData: newArray
      }
    })
  }

  addTodo = (text) => {
    const newTodoId = this.state.idTodoFrom + 1;
    
    const newTodo = {
      id: newTodoId,
      label: text
    }

    this.setState( ({ todoData }) => {
      const newArray = [...todoData, newTodo];

      ls.set('idTodoFrom', newTodoId);
      ls.set('todoData', newArray);
      return {
        idTodoFrom: newTodoId,
        todoData: newArray
      }
    });
  }

  addComment = (text) => {
    const newCommentId = this.state.idCommentFrom + 1;

    const newComment = {
      id: newCommentId,
      idTodo: this.state.selectedItem,
      userData: 'userMain',
      text
    }

    this.setState(({ commentsData }) => {
      
      const newArray = [...commentsData, newComment];

      ls.set('idCommentFrom', newCommentId);
      ls.set('commentsData', newArray);
      return {
        idCommentFrom: newCommentId,
        commentsData: newArray
      }
    });
  }

  commentsSumByTodo(idTodo) {
    const result = this.state.commentsData.filter( (item) => item.idTodo === idTodo ).length

    console.log(result);
  }
  
  render() {
    const { selectedItem, todoData, commentsData } = this.state;

    return (
      <div className="container-fluid bg-main">
        <div className="container">
          <div className="row">
            <Sidebar/>
            <Content 
              selectedItem={ selectedItem }
              todoData={ todoData }
              onDeleted={ this.deleteTodo }
              onAddTodo={ this.addTodo }
              commentsData={ commentsData }
              onAddComment={ this.addComment }
              onActiveSelected={ this.onItemSelected }
              commentsSumByTodo={ this.commentsSumByTodo }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
