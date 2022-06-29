import logo from './logo.svg';
import './App.css';
import Meins from './Meins';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Meins
          title={<span>hello</span>}
        >
          <span>Text für Komponente</span>
        </Meins>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Meins
        
        ></Meins>
      </header>
    </div>
  );
}

export default App;
