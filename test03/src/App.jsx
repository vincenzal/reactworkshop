import './App.css';
import React,{Component} from 'react';
//import {Router, Switch, Route} from 'react-router-dom'; // alt
//import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom'; // v6
import {BrowserRouter, Routes, Route, Navigate, Link} from 'react-router-dom'; // v6

import Home from './pages/Home';
import Test from './pages/Test';
import Navigation from './components/Navigation';

class App extends Component {

  state = {
    auth : true
  }

  constructor() {
    super();
  }


  render() {
    return (
      <BrowserRouter>
          <Routes>
             <Route path="/" exact element={<h1>HelloApp</h1>} />
          </Routes>          
          <Navigation />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/test" element={<Test />} />
            { this.state.auth ?  
              <Route path="/member" element={<p>geheim...</p>} />
              :
              <Route path="/member" element={<Navigate to="/" replace />} />        
            }
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>       
      </BrowserRouter>
    );
  }
}

export default App;
