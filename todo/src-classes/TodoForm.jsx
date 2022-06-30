import React from 'react';
import './TodoForm.css';



class TodoForm extends React.Component {

    state = {
        newTodoValue:''
    }

    constructor(props) {
        super(props);
        this.textInput = React.createRef();    
    }

    handleClick(e) {
        e.preventDefault();
        if ( this.state.newTodoValue != '' ) {
            this.props.addTodo(this.state.newTodoValue);
            this.setState({newTodoValue:''});
            this.textInput.current.focus();  
        }
    }

    handleChange(e) {
        console.log( e.target.value );
        this.setState({newTodoValue: e.target.value})
    }

    render() {
        return (
            <form>
                <h2>My To Do List</h2>
                <input 
                    type="text" 
                    placeholder="Title..." 
                    value={this.state.newTodoValue} 
                    onChange={(e)=>{this.handleChange(e);}} 
                    autoFocus
                    ref={this.textInput}
                />
                <button className="addBtn" onClick={this.handleClick.bind(this)}>Add</button>
            </form>
        );
    }
}

export default TodoForm;