import { useState, useCallback, useContext, createContext } from 'react';
import {v4} from 'uuid';

const TodoContext = createContext([]);

export const TodoProvider = ( {allTodos, children} ) => {

  // get Data first time from localStorage
  let savedTodos = localStorage.getItem( 'reactTodos' );
  if ( savedTodos ) {
    allTodos = JSON.parse( savedTodos );
  }

  const [todos,setTodos] = useState( allTodos );

  const saveTodos = ( todos ) => {
    localStorage.setItem( 'reactTodos', JSON.stringify(todos  ) );
    setTodos( todos );
  }

  const addTodo = useCallback((title)=>{
      let newTodo = {
          id:v4(),
          title:title,
          checked:false
      }    
      saveTodos([...todos, newTodo ]);
    },[todos]
  );

  const toggleChecked = useCallback((id) => {
      const updatedTodos = todos.map( task => (
        id===task.id ? {...task, checked:!task.checked } : task 
      ));
      saveTodos(updatedTodos);
    },[todos]
  );


  const deleteTodo =  useCallback(( id ) => {
      const updatedTodos = todos.filter( task => id !== task.id );  
      saveTodos(updatedTodos);
      } ,[todos]
  );

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleChecked, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  )

};

export const useTodo = () => {
  return useContext( TodoContext );
}