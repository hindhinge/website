import React, { Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import  './Header.css';
import { Button } from 'reactstrap';
import App from './App'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {logo: '<Sawicki />',
                    link: '/about'                    
    };
      }


  render() {
    return (
        <div className = "header">
            <p className = "text_logo">{this.state.logo}</p>
            <Link to='/about' className='text_about'>O mnie</Link>
            <Link to='/projects' className = "text_projects">Projekty</Link>
            <Link to='/contact' className = "text_contact" >Kontakt</Link>
        </div>
    );
  }
}
 
export default Header;