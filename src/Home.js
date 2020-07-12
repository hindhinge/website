import React, { Component} from 'react';
import {BrowserRouter as Router, Link, Redirect} from 'react-router-dom'
import  './Body.css';


class Home extends Component {
    constructor(props) {
        super(props);
    };

    renderRedirect = () => {
        return <Redirect to='/pl/about' />
    };

  render() {
    return (
        <div className = "body">
            {this.renderRedirect()}
        </div>
    );
  }
}
 
export default Home;