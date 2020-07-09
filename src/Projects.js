import React, { Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import  './Projects.css';
import Expandable from './Expandable'
import ProjectCard from './ProjectCard'


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
      <Expandable language={"Python"} name={"Pyttleships"}>
          <ProjectCard/>
      </Expandable>
      <Expandable language={"Vhdl"} name={"PTC2075"}>
          <ProjectCard/>
      </Expandable>
      <Expandable language={"Kotlin"} name={"FTPDisplayer"}>
          <ProjectCard/>
      </Expandable>
      <Expandable language={"Cpp"} name={"ConsoleBlackjack"}>
          <ProjectCard/>
      </Expandable>
      <Expandable language={"Asp"} name={"NFZSim"}>
          <ProjectCard/>
      </Expandable>
      <p className="projects_categories">•Starsze</p>

    </div>
);
}
}
 
export default Projects;