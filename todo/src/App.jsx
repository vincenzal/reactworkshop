import NewTodo from './NewTodo';
import TodoList from './TodoList';
import './App.css';
import {useState,useEffect} from 'react';

//https://www.w3schools.com/howto/howto_js_todolist.asp
function App() {
  const [todos,setTodos] = useState([
    {text:'Aufgabe1', done:false, id:1},
    {text:'Aufgabe2', done:false, id:2}
  ]);

  const toggleDone = (id) => {
    console.log( id );
    const updatedTodos = todos.map( (el,i)=>(
      id===el.id?{...el,done:!el.done} : el
    ))
   
    setTodos( updatedTodos );
  }

  return (
    <div className="todoliste">
      <NewTodo />
      <TodoList todos={todos} toggleDone={toggleDone} />
    </div>
  );
}

export default App;
