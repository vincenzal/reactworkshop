import React from 'react';
import './TodoListe.css';
import Todo from './Todo';

class TodoListe extends React.Component {
    
    constructor(props) {
        super(props);      
    }

    render() {
        console.log( 'todos TodoListe changed' );
        return (
            <ul id="myUL">
                {
                    this.props.tasks.map( el => (
                        <Todo 
                            title={el.title} 
                            checked={el.checked} 
                            id={el.id}
                            key={el.id} 
                            toggleChecked={this.props.toggleChecked}
                            deleteTodo={this.props.deleteTodo}
                        />
                    ))
                    }     
                {/*this.createTodos()*/}             
            </ul>
             
             
        );
    }
}

export default TodoListe;