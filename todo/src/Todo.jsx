function Todo(props) {
    return (<li className={props.done&&'checked'} onClick={e=>{props.toggleDone( props.id ); }}>
        {props.text}
        <span className="close">&#x00D7;</span>
    </li>)
}

export default Todo;