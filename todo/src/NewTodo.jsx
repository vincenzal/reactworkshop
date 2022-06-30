import {useState,useRef} from 'react';

function NewTodo(props) {
    const [newTodo,setNewTodo] = useState('');
    const textInput = useRef(null);

    const handleChange = (e)=>{
        setNewTodo( e.target.value );
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.addTodo( newTodo );
        setNewTodo('');
        // input direkt ansprechen
        textInput.current.focus();

    }

    return (<form onSubmit={submitHandler}>
        <h2>WU TODO Liste</h2>
        <input
            type="text"
            placeholder="Neue Aufgabe..."
            autoFocus
            onChange={handleChange}
            value={newTodo}
            ref={textInput}
            />
        <button className="addBtn">Add</button>
    </form>)
}

export default NewTodo;