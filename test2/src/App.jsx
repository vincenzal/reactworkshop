import logo from './logo.svg';
import './App.css';
import Meins from './Meins';
import {useState, useEffect} from 'react';

function App() {
  //let counter = 0;

  const [counter,setCounter ] = useState(0);

 useEffect( ()=>{
  fetch('http://wifi.1av.at/random.php?min=1&max=10')
  .then( response => response.text() )
  .then( data => {
    console.log( data );
    setCounter( Number(data) );
  })
 },[]);


  const resetCounter = ()=>{
    setCounter(0);
  }

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
          counter={counter}
          reset={resetCounter}
        >
          <span>Text für Komponente</span>
        </Meins>
        <div id="zahl">Counter: {counter}</div>
        <button id="btn" onClick={(e)=>{clickHandler(e,1)}}>+1</button>
        <button id="btn2" onClick={ event=>{ clickHandler(event,2) } }>+2</button>
        <Meins
          counter={counter}
          reset={resetCounter}
        ></Meins>
      </header>
    </div>
  );
}

export default App;
