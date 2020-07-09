import React, { Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import  './Body.css';


class Contact extends Component {
    constructor(props) {
        super(props);
    };


  render() {
    return (
        <div className = "body">
            <p>contact</p>
        </div>
    );
  }
}
 
export default Contact;