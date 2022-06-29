import './Meins.css';
import {useState} from 'react';

function Meins( props ) {
    console.log( props );

   /* const [counter,setCounter ] = useState(0);
    const clickHandler = (e,i)=>{
        e.preventDefault();
        //counter++;
        setCounter( counter+i ); // async
        console.log( counter );
      }*/

    let h1tag = '';
    if ( props.title ) {
        // h1tag = '<h1>'+props.title+'</h1>';
        // h1tag = `<h1>${props.title}</h1>`; // Templatestring
        h1tag = <h1>{props.title}</h1>;
    }
/*
    if ( props.title ) {
        return (
            <>
                {/*  mach H1 nur wenn props.title nicht leer ist * / }
                <h1>{props.title}</h1>
                <p>Hello World!</p>
            </>
        );
    } else {
        return (
            <>
                {/*  mach H1 nur wenn props.title nicht leer ist * 
            </>
        );
    }

    */

    return (
        <>
            {/*  mach H1 nur wenn props.title nicht leer ist */ }
            {props.title?(<h1>{props.title}</h1>):(<h2>no title</h2>)}
            <p>{props.children?props.children:'Hello World!'}</p>
            mein Counter: {props.counter}
            <a href="#" onClick={e=>{e.preventDefault(); props.reset(); }}>reset</a>
        </>
    );

}

export default Meins;