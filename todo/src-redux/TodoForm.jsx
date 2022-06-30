import React, {useRef, useState} from 'react';
import './TodoForm.css';
//import {useTodo} from './todo-hook.jsx';
import {useSelector, useDispatch} from 'react-redux';


function TodoForm(props) {
    //const { todos, addTodo } = useTodo();

    const todos = useSelector( state=>state.todos );
    const dispatch = useDispatch();

    const [newTodoValue, setNewTodoValue] = useState( '' );
    const [inputClass, setInputClass] = useState( '' );
    const textInput = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        if ( newTodoValue !== '' ) {

            if ( todos.findIndex( el => el.title === newTodoValue ) > -1 ) {
                setInputClass( 'error' );
            } else {
                //addTodo(newTodoValue);
                dispatch({type:'add',title:newTodoValue});
                setNewTodoValue('');
                setInputClass('');
                textInput.current.focus();  
            }
        }
    }

    const handleChange = (e) => {
        setInputClass('');
        setNewTodoValue( e.target.value )
    }

    return (
        <form>
            <h2>My To Do List</h2>
            <input 
                className={inputClass}
                type="text" 
                placeholder="Title..." 
                value={newTodoValue} 
                onChange={handleChange} 
                autoFocus
                ref={textInput}
            />
            <button className="addBtn" onClick={handleClick}>Add</button>
        </form>
    );
}

export default TodoForm;