import './App.css';
import TodoForm from './TodoForm';
import TodoListe from './TodoListe';
import React from 'react';

import {v4} from 'uuid';

//https://miro.medium.com/proxy/0*2Y__6_3e2eiN8h6A

class App extends React.Component {

  state = {
    todos:[]
  }
  
  constructor() {
    super();
    let savedTodos = localStorage.getItem( 'reactTodos' );
    if ( savedTodos ) {
      this.state.todos = JSON.parse( savedTodos );
    }
    this.addTodo = this.addTodo.bind(this);

    //this.state = {}

  }
  componentDidMount() {
    // async
  }
  toggleChecked(id) {
    console.log( 'toggleTODO', id );
    //console.log( this );
    /*
    this.setState( {todos: 
        this.state.todos.map( task => {
          if ( task.id === id ) {
            task.checked = !task.checked;
          }
          return task;
        })
      });    
     */ 
    const updatedTodos = this.state.todos.map( task => (
      id===task.id ? {...task, checked:!task.checked } : task 
    ));
    this.saveTodos(updatedTodos);

  }

  saveTodos( todos ) {
    localStorage.setItem( 'reactTodos', JSON.stringify(todos  ) );
    this.setState( {todos} );
  }

  addTodo( title ) {
    let newTodo = {
      id:v4(),
      title:title,
      checked:false
    }
    //this.state.todos.push( newTodo );
    this.saveTodos([...this.state.todos, newTodo ]);
  }

  deleteTodo( id ) {
    const updatedTodos = this.state.todos.filter( task => id !== task.id );
    //this.setState( {todos:updatedTodos})
    this.saveTodos(updatedTodos);
  }

  render() {
    return (
      <div className="todoliste">
        <TodoForm addTodo={this.addTodo} />
        <TodoListe 
          tasks={this.state.todos} 
          toggleChecked={this.toggleChecked.bind(this)} 
          deleteTodo={this.deleteTodo.bind(this)}
        />     
      </div>
    );
  }
}

export default App;
