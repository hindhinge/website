import React, { Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import  './Header.css';
import { Button } from 'reactstrap';
import App from './App'
import Contact from './Contact'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {logo: '<Sawicki />',
                    link: '/about',
                    showing: false                    
    };
        this.showContact = this.showContact.bind(this);
      }
  static showing = false

  static changeShowing(){
    Header.showing = !Header.showing;
    this.setState({state:this.state})
  }
  
  showContact(){
    Header.showing = !Header.showing;
    this.setState({showing: Header.showing})
  }


  render() {
    const contact = () => {
      return(<Contact/>)
    }
    return (
        <div className = "header">
            {this.state.showing?contact():<div></div>}
            <p className = "text_logo">{this.state.logo}</p>
            <Link to='/about' className='text_about'>O mnie</Link>
            <Link to='/projects' className = "text_projects">Projekty</Link>
            <p className = 'text_contact' onClick={this.showContact}>Kontakt</p>
        </div>
    );
  }
}
 
export default Header;