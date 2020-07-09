import React, { Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import  './Projects.css';
import Expandable from './Expandable'


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false,
    }
    this.toggle = this.toggle.bind(this)
};


toggle(){
    this.setState({isOpen: !this.state.isOpen})
}

render() {
return (
    <div className = "body">
      <p className="projects_categories">•Ostatnie</p>
      <Expandable language={"Python"} image={"./img/logo_Python.png"}>
          <p>biggest pyton ever</p>
      </Expandable>
      <p className="projects_categories">•Starsze</p>
    </div>
);
}
}
 
export default Projects;