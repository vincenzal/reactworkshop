import NewTodo from './NewTodo';
import TodoList from './TodoList';
import './App.css';
import {useState,useEffect} from 'react';
import {v4} from 'uuid';

//https://www.w3schools.com/howto/howto_js_todolist.asp
function App() {
  const [todos,setTodos] = useState([]);

  useEffect(()=>{
    let savedTodos = localStorage.getItem( 'mytodos' );
    if ( savedTodos ) {
      setTodos( JSON.parse( savedTodos ));
    }
  },[]);

  const updateStorage = (todos) => {
    setTodos(todos);
    localStorage.setItem( 'mytodos', JSON.stringify( todos ) )
  }

  const toggleDone = (id) => {
    console.log( id );
    const updatedTodos = todos.map( (el,i)=>(
      id===el.id?{...el,done:!el.done} : el
    ))
   
    updateStorage( updatedTodos );
  }

  const todoDelete = (e,id) => {
    e.stopPropagation();
    console.log( 'delete', id);
    const updatedTodos = todos.filter( (el,i)=>el.id!=id);
   
    updateStorage( updatedTodos );

  }

  const addTodo = ( newTodoText ) => {
    //console.log( newTodo );
    let newTodo = {text:newTodoText, done:false, id:v4()};
    
    updateStorage([...todos,newTodo]);

  }

  return (
    <div className="todoliste">
      <NewTodo 
        addTodo={addTodo}
      />
      <TodoList 
        todos={todos} 
        toggleDone={toggleDone} 
        todoDelete={todoDelete}
      />
    </div>
  );
}

export default App;
