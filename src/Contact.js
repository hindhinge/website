import React, { Component, Button} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import  './Contact.css';
import Header from './Header'


class Contact extends Component {
    constructor(props) {
        super(props);
      
      this.setShowing = this.setShowing.bind(this);
    };

  setShowing(){
    Header.changeShowing();
  }

  render() {
    return (
        <div className = "frame_upper">
          <div className = 'frame_lower'>
            <p onClick={this.setShowing}>close me</p>
          </div>
        </div>
    );
  }
}
 
export default Contact;