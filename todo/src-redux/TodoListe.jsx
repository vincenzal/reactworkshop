import './TodoListe.css';
import Todo from './Todo';
import { useSelector } from 'react-redux'; 
import {useEffect} from 'react';

function TodoListe( props )  {
    const todos = useSelector( state=>state.todos );

    useEffect( ()=>{
        console.log( 'todos TodoListe changed')
    },[todos])


    return (
        <ul id="myUL">
            {
                todos.map( el => (
                    <Todo 
                        title={el.title} 
                        checked={el.checked} 
                        id={el.id}
                        key={el.id} 
                    />
                ))
            }                   
        </ul>
            
            
    );
}

export default TodoListe;