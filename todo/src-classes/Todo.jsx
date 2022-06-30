import React from 'react';
import './Todo.css';

class Todo extends React.Component {
  /*  state = {
        checked:false,
      //  render:0
    } */

    constructor(props) {
        //console.log( 'constructor' );
        super(props);
        //this.clickHandler = this.clickHandler.bind(this);
      // this.setState( {checked:this.props.checked} ); // state Eigenschaften nur mit setState ändern!
       // this.state.checked = this.props.checked === true;
       // this.aktiviert = this.props.checked;
    } 

    clickHandler(e) {
       this.props.toggleChecked( this.props.id );
    }

    clickHandlerDelete(e) {
        e.stopPropagation(); // kein Klick bei <li> auslösen
        this.props.deleteTodo( this.props.id );
    }

    render() {
        console.log( 'todos TODO changed' );
        return (
            <li 
                className={this.props.checked?'checked':''}
                onClick={(e)=>{this.clickHandler(e);}}>{this.props.title}
                <span className="close" onClick={this.clickHandlerDelete.bind(this)}>&#x00D7;</span>                    
            </li>
        );
    }
}

export default Todo;