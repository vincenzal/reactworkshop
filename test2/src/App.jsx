import logo from './logo.svg';
import './App.css';
import Meins from './Meins';
import {useState} from 'react';

function App() {
  //let counter = 0;

  const [counter,setCounter ] = useState(0);

  const clickHandler = (e,i)=>{
    e.preventDefault();
    //counter++;
    setCounter( counter+i ); // async
    console.log( counter );
  }


  return (
    <div className="App">
      <header className="App-header">
        <Meins
          title={<span>hello</span>}
        >
          <span>Text für Komponente</span>
        </Meins>
        <div id="zahl">Counter: {counter}</div>
        <button id="btn" onClick={(e)=>{clickHandler(e,1)}}>+1</button>
        <button id="btn2" onClick={ event=>{ clickHandler(event,2) } }>+2</button>
        <Meins
        
        ></Meins>
      </header>
    </div>
  );
}

export default App;
