import NewTodo from './NewTodo';
import TodoList from './TodoList';
import './App.css';

//https://www.w3schools.com/howto/howto_js_todolist.asp
function App() {
  return (
    <div className="todoliste">
      <NewTodo />
      <TodoList />
    </div>
  );
}

export default App;
