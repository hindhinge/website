import React, { Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import  './Body.css';


class Home extends Component {
    constructor(props) {
        super(props);
    };


  render() {
    return (
        <div className = "body">
            <p>home</p>
        </div>
    );
  }
}
 
export default Home;