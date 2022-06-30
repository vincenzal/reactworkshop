
import React,{Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends Component {
    render() {
        return (
            <nav>
            <ul>
              <li>
                 <NavLink to="/" className={(navData)=> navData.isActive ? 'aktiviert' : '' }>Home</NavLink>                 
              </li>
              <li>
                 <NavLink to="/test" className={(navData)=> navData.isActive ? 'aktiviert' : '' }>Test</NavLink>                 
              </li>
              <li>
                 <NavLink to="/member" className={(navData)=> navData.isActive ? 'aktiviert' : '' }>Member</NavLink>                 
              </li>
            </ul>
          </nav>
        )
    }
}