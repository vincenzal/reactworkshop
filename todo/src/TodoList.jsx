import Todo from "./Todo";

function TodoList(props) {
    return (<ul id="myUL">
        {
            props.todos.map( (el,i) => (
                <Todo 
                    key={`todo_${i}`}
                    text={el.text} />
            ) )
        }
    </ul>)
}

export default TodoList;