import './Todo.css';
//import {useTodo} from './todo-hook.jsx';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';

function Todo(props) {
    const dispatch = useDispatch();
    //const {todos,toggleChecked,deleteTodo} = useTodo();
    useEffect( ()=>{
        console.log( 'todos TODO changed')
    },[])


    const clickHandler = (e) => {
        dispatch({ type:'toggle', id: props.id} );
    }

    const clickHandlerDelete = (e) => {
        e.stopPropagation(); 
        dispatch({ type:'delete', id: props.id} );
    }

    return (
        <li 
            className={props.checked?'checked':''}
            onClick={clickHandler}>{props.title}
            <span className="close" onClick={clickHandlerDelete}>&#x00D7;</span>                    
        </li>
    );
 
}

export default Todo;