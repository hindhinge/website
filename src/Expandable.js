import React, { Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './Expandable.css';
import logo_python from './logo_Python.png'


class Expandable extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false

        };
        this.toggle = this.toggle.bind(this)
      }

      componentDidMount(){
          var src = this.props.language;
          if (this.props.language == "Python"){
              this.setState({logo:logo_python})
          }   
          this.setState({imgSrc:src});
      }

      toggle(){
          console.log(this.state.imgSrc)
          this.setState({isOpen: !this.state.isOpen})
      }

  render() {
    return (
        <div className='expandable' onClick={this.toggle}>
            <div className='title_logo'>
            <img src={this.state.logo} className="logo"/>
            <p className="language_title">{this.props.language}</p>
            </div>
            <Collapse isOpen={this.state.isOpen}>
                {this.props.children}
            </Collapse>
        </div>
    );
  }
}
 
export default Expandable;