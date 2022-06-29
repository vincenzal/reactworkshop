function Todo(props) {
    return (<li>
        {props.text}
        <span className="close">&#x00D7;</span>
    </li>)
}

export default Todo;