import React, { Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import { Collapse, Button, CardBody, Card,Container,Col,Row } from 'reactstrap';
import './Expandable.css';
import logo_python from './img/logo_Python.png'
import logo_vhdl from './img/logo_Vhdl.png'
import logo_cpp from './img/logo_Cpp.png'
import logo_kotlin from './img/logo_Kotlin.png'
import logo_react from './img/logo_React.png'
import logo_asp from './img/logo_Asp.png'
import down_arrow from './img/down_arrow.png'


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
          if ((this.props.language == "Vhdl") || (this.props.language =='Verilog')){
            this.setState({logo:logo_vhdl})
          }
          if (this.props.language == "Cpp"){
            this.setState({logo:logo_cpp})
          } 
          if (this.props.language == "Kotlin"){
            this.setState({logo:logo_kotlin})
          } 
          if (this.props.language == "React"){
            this.setState({logo:logo_react})
          } 
          if (this.props.language == "Asp"){
            this.setState({logo:logo_asp})
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
            <img src={down_arrow} className={this.state.isOpen?"arrow_rot":"arrow"}/>
            <p className='title_name'>{this.props.name}</p>
            <img src={this.state.logo} className="logo"/>
            {/* <p className="title_language">{this.props.language}</p> */}
            </div>
            <Collapse isOpen={this.state.isOpen}>
                {this.props.children}
            </Collapse>
        </div>
    );
  }
}
 
export default Expandable;