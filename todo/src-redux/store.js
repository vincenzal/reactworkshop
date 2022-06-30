import {createStore} from 'redux'
import {v4} from 'uuid';

const initialState = {
    todos:[]
}
let savedTodos = localStorage.getItem( 'reactTodos' );
if ( savedTodos ) {
   initialState.todos = JSON.parse( savedTodos );
}

const saveTodos = ( todos ) => {
    localStorage.setItem( 'reactTodos', JSON.stringify(todos) );
}

function todoReducer(state = initialState, action) {
    let updatedTodos;
    switch (action.type) {
      case 'add':
            let newTodo = {
                id:v4(),
                title:action.title,
                checked:false
            }
          saveTodos([...state.todos, newTodo]); 
          return { ...state, todos:[...state.todos, newTodo] }
          break;  
      case 'delete': 
            updatedTodos = state.todos.filter( task => action.id !== task.id );  
            saveTodos(updatedTodos);
            return { ...state, todos:updatedTodos }
            break;
      case 'toggle':
            updatedTodos = state.todos.map( task => (
                action.id===task.id ? {...task, checked:!task.checked } : task 
            ));
            saveTodos(updatedTodos);
            return { ...state, todos:updatedTodos }
            break;
      default:
        return state
    }
  }

export default createStore(todoReducer)