import Todo from "./Todo";

function TodoList(props) {
    return (<ul id="myUL">
        {
            props.todos.map( (el,i) => (
                <Todo 
                    key={`todo_${i}`}
                    text={el.text}
                    id={el.id}
                    done={el.done}
                    toggleDone={props.toggleDone} 
                />
            ) )
        }
    </ul>)
}

export default TodoList;