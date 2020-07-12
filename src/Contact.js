import React, { Component, Button} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import  './Contact.css';
import Header from './Header'
import Projects from './Projects';


class Contact extends Component {
    constructor(props) {
        super(props);
      
      this.setShowing = this.setShowing.bind(this);
    };

  setShowing(){
    this.props.header.showContact();
  }

  render() {
    if (this.props.language == 'pl'){
      return (
        <div className = "frame_upper">
          <div className = 'frame_lower'>
            <div className='exitpanel'>
            <p className='exitpanel_title'>Kontakt</p>
            <p className='exitpanel_cross' onClick={this.setShowing}>X</p>

            </div>
            <div className='textpanel'>
            <div ><p className='textpanel_questions'>Masz pytania albo sugestie?</p></div>
            <div><p className='textpanel_questions_small'>Napisz!</p></div>
            <div><p className='textpanel_content'>Email: radoslawsylwestersawicki@gmail.com</p></div>
            <div><p className='textpanel_content'>Linkedin: linkedin.com/in/radoslaw-sylwester-sawicki/</p></div>

            </div>
          </div>
        </div>
    );
    } else {
      return (
        <div className = "frame_upper">
          <div className = 'frame_lower'>
            <div className='exitpanel'>
            <p className='exitpanel_title'>Contact</p>
            <p className='exitpanel_cross' onClick={this.setShowing}>X</p>

            </div>
            <div className='textpanel'>
            <div><p className='textpanel_questions'>Any questions or suggestions?</p></div>
            <div><p className='textpanel_questions_small'>Let's get in touch!</p></div>
            <div><p className='textpanel_content'>Email: radoslawsylwestersawicki@gmail.com</p></div>
            <div><p className='textpanel_content'>Linkedin: linkedin.com/in/radoslaw-sylwester-sawicki/</p></div>

            </div>
          </div>
        </div>
    );
    }
  }
}
 
export default Contact;