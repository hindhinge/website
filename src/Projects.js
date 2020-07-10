import React, { Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import  './Projects.css';
import Expandable from './Expandable'
import ProjectCard from './ProjectCard'
import ProjectCard2 from './ProjectCard2'
import pylogo from './img/logo_Python.png'
import blackjack1 from './img/blackjack_1.png'
import blackjack2 from './img/blackjack_2.png'
import browar1 from './img/browar_1.png'
import browar2 from './img/browar_2.png'
import ftp1 from './img/ftp_1.png'
import ftp2 from './img/ftp_2.png'
import ftp3 from './img/ftp_3.png'
import nfz1 from './img/nfz_1.png'
import nfz2 from './img/nfz_2.png'
import pct1 from './img/pct2075_1.png'
import pct2 from './img/pct2075_2.png'
import ships1 from './img/pyttleships_1.png'
import ships2 from './img/pyttleships_2.png'
import spectro1 from './img/spectro_1.png'
import vending1 from './img/vending_1.png'
import vending2 from './img/vending_2.png'
import antsim1 from './img/antsim_1.png'
import Contact from './Contact';


class Projects extends Component {
  constructor(props) {
    super(props);
    console.log(Contact.showing);
    this.state = {isOpen: false,
    }
    this.toggle = this.toggle.bind(this)
    this.pyttleships = {
        text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id libero vitae metus interdum viverra. Aenean fringilla sem hendrerit, ornare velit quis, sagittis lorem. Ut pulvinar placerat erat, vitae ornare nulla rhoncus ac. In congue nec arcu a vehicula. Quisque aliquet sapien sit amet ipsum mattis euismod. Nulla euismod at metus et interdum. Etiam felis felis, dapibus et imperdiet non, gravida cursus enim.',
               'Vestibulum aliquet ex ut molestie egestas. Suspendisse molestie orci eu quam porta, nec efficitur nunc aliquet. Etiam tincidunt metus eu posuere dignissim. Nullam sodales, elit nec pretium pulvinar, enim ipsum porta nisl, ac consectetur orci turpis vitae ipsum. Quisque felis tellus, maximus at mollis volutpat, sollicitudin sit amet ipsum. Suspendisse dapibus fringilla risus et mattis. Suspendisse ante dui, volutpat at lacus non, tristique convallis nibh. Proin at nisl interdum, fringilla arcu gravida, gravida purus. Curabitur commodo velit dignissim felis ullamcorper pellentesque.'],
        imgs: [ships1,ships2],
        github: 'ijo ijo.github.com',
        name:"ships"
      };

    this.blackjack = {
        text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id libero vitae metus interdum viverra. Aenean fringilla sem hendrerit, ornare velit quis, sagittis lorem. Ut pulvinar placerat erat, vitae ornare nulla rhoncus ac. In congue nec arcu a vehicula. Quisque aliquet sapien sit amet ipsum mattis euismod. Nulla euismod at metus et interdum. Etiam felis felis, dapibus et imperdiet non, gravida cursus enim.',
               'Vestibulum aliquet ex ut molestie egestas. Suspendisse molestie orci eu quam porta, nec efficitur nunc aliquet. Etiam tincidunt metus eu posuere dignissim. Nullam sodales, elit nec pretium pulvinar, enim ipsum porta nisl, ac consectetur orci turpis vitae ipsum. Quisque felis tellus, maximus at mollis volutpat, sollicitudin sit amet ipsum. Suspendisse dapibus fringilla risus et mattis. Suspendisse ante dui, volutpat at lacus non, tristique convallis nibh. Proin at nisl interdum, fringilla arcu gravida, gravida purus. Curabitur commodo velit dignissim felis ullamcorper pellentesque.'],
        imgs: [blackjack1,blackjack2],
        github: 'ijo ijo.github.com',
        name:"blackjack"
      };
    
    this.browar = {
        text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id libero vitae metus interdum viverra. Aenean fringilla sem hendrerit, ornare velit quis, sagittis lorem. Ut pulvinar placerat erat, vitae ornare nulla rhoncus ac. In congue nec arcu a vehicula. Quisque aliquet sapien sit amet ipsum mattis euismod. Nulla euismod at metus et interdum. Etiam felis felis, dapibus et imperdiet non, gravida cursus enim.',
               'Vestibulum aliquet ex ut molestie egestas. Suspendisse molestie orci eu quam porta, nec efficitur nunc aliquet. Etiam tincidunt metus eu posuere dignissim. Nullam sodales, elit nec pretium pulvinar, enim ipsum porta nisl, ac consectetur orci turpis vitae ipsum. Quisque felis tellus, maximus at mollis volutpat, sollicitudin sit amet ipsum. Suspendisse dapibus fringilla risus et mattis. Suspendisse ante dui, volutpat at lacus non, tristique convallis nibh. Proin at nisl interdum, fringilla arcu gravida, gravida purus. Curabitur commodo velit dignissim felis ullamcorper pellentesque.'],
        imgs: [browar1,browar2],
        github: 'ijo ijo.github.com',
        name:"browar"
      };
    this.pct = {
        text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id libero vitae metus interdum viverra. Aenean fringilla sem hendrerit, ornare velit quis, sagittis lorem. Ut pulvinar placerat erat, vitae ornare nulla rhoncus ac. In congue nec arcu a vehicula. Quisque aliquet sapien sit amet ipsum mattis euismod. Nulla euismod at metus et interdum. Etiam felis felis, dapibus et imperdiet non, gravida cursus enim.',
               'Vestibulum aliquet ex ut molestie egestas. Suspendisse molestie orci eu quam porta, nec efficitur nunc aliquet. Etiam tincidunt metus eu posuere dignissim. Nullam sodales, elit nec pretium pulvinar, enim ipsum porta nisl, ac consectetur orci turpis vitae ipsum. Quisque felis tellus, maximus at mollis volutpat, sollicitudin sit amet ipsum. Suspendisse dapibus fringilla risus et mattis. Suspendisse ante dui, volutpat at lacus non, tristique convallis nibh. Proin at nisl interdum, fringilla arcu gravida, gravida purus. Curabitur commodo velit dignissim felis ullamcorper pellentesque.'],
        imgs: [pct1,pct2],
        github: 'ijo ijo.github.com',
        name:"pct"
      };
    this.ftp = {
        text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id libero vitae metus interdum viverra. Aenean fringilla sem hendrerit, ornare velit quis, sagittis lorem. Ut pulvinar placerat erat, vitae ornare nulla rhoncus ac. In congue nec arcu a vehicula. Quisque aliquet sapien sit amet ipsum mattis euismod. Nulla euismod at metus et interdum. Etiam felis felis, dapibus et imperdiet non, gravida cursus enim.',
               'Vestibulum aliquet ex ut molestie egestas. Suspendisse molestie orci eu quam porta, nec efficitur nunc aliquet. Etiam tincidunt metus eu posuere dignissim. Nullam sodales, elit nec pretium pulvinar, enim ipsum porta nisl, ac consectetur orci turpis vitae ipsum. Quisque felis tellus, maximus at mollis volutpat, sollicitudin sit amet ipsum. Suspendisse dapibus fringilla risus et mattis. Suspendisse ante dui, volutpat at lacus non, tristique convallis nibh. Proin at nisl interdum, fringilla arcu gravida, gravida purus. Curabitur commodo velit dignissim felis ullamcorper pellentesque.'],
        imgs: [ftp2,ftp3],
        github: 'ijo ijo.github.com',
        name:"ftp"
      };
    this.nfz = {
        text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id libero vitae metus interdum viverra. Aenean fringilla sem hendrerit, ornare velit quis, sagittis lorem. Ut pulvinar placerat erat, vitae ornare nulla rhoncus ac. In congue nec arcu a vehicula. Quisque aliquet sapien sit amet ipsum mattis euismod. Nulla euismod at metus et interdum. Etiam felis felis, dapibus et imperdiet non, gravida cursus enim.',
               'Vestibulum aliquet ex ut molestie egestas. Suspendisse molestie orci eu quam porta, nec efficitur nunc aliquet. Etiam tincidunt metus eu posuere dignissim. Nullam sodales, elit nec pretium pulvinar, enim ipsum porta nisl, ac consectetur orci turpis vitae ipsum. Quisque felis tellus, maximus at mollis volutpat, sollicitudin sit amet ipsum. Suspendisse dapibus fringilla risus et mattis. Suspendisse ante dui, volutpat at lacus non, tristique convallis nibh. Proin at nisl interdum, fringilla arcu gravida, gravida purus. Curabitur commodo velit dignissim felis ullamcorper pellentesque.'],
        imgs: [nfz1,nfz2],
        github: 'ijo ijo.github.com',
        name:"nfz"
      };
    this.spectro = {
        text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id libero vitae metus interdum viverra. Aenean fringilla sem hendrerit, ornare velit quis, sagittis lorem. Ut pulvinar placerat erat, vitae ornare nulla rhoncus ac. In congue nec arcu a vehicula. Quisque aliquet sapien sit amet ipsum mattis euismod. Nulla euismod at metus et interdum. Etiam felis felis, dapibus et imperdiet non, gravida cursus enim.',
               'Vestibulum aliquet ex ut molestie egestas. Suspendisse molestie orci eu quam porta, nec efficitur nunc aliquet. Etiam tincidunt metus eu posuere dignissim. Nullam sodales, elit nec pretium pulvinar, enim ipsum porta nisl, ac consectetur orci turpis vitae ipsum. Quisque felis tellus, maximus at mollis volutpat, sollicitudin sit amet ipsum. Suspendisse dapibus fringilla risus et mattis. Suspendisse ante dui, volutpat at lacus non, tristique convallis nibh. Proin at nisl interdum, fringilla arcu gravida, gravida purus. Curabitur commodo velit dignissim felis ullamcorper pellentesque.'],
        imgs: [spectro1],
        github: 'ijo ijo.github.com',
        name:"spectro"
      };
    this.vending = {
        text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id libero vitae metus interdum viverra. Aenean fringilla sem hendrerit, ornare velit quis, sagittis lorem. Ut pulvinar placerat erat, vitae ornare nulla rhoncus ac. In congue nec arcu a vehicula. Quisque aliquet sapien sit amet ipsum mattis euismod. Nulla euismod at metus et interdum. Etiam felis felis, dapibus et imperdiet non, gravida cursus enim.',
               'Vestibulum aliquet ex ut molestie egestas. Suspendisse molestie orci eu quam porta, nec efficitur nunc aliquet. Etiam tincidunt metus eu posuere dignissim. Nullam sodales, elit nec pretium pulvinar, enim ipsum porta nisl, ac consectetur orci turpis vitae ipsum. Quisque felis tellus, maximus at mollis volutpat, sollicitudin sit amet ipsum. Suspendisse dapibus fringilla risus et mattis. Suspendisse ante dui, volutpat at lacus non, tristique convallis nibh. Proin at nisl interdum, fringilla arcu gravida, gravida purus. Curabitur commodo velit dignissim felis ullamcorper pellentesque.'],
        imgs: [vending1,vending2],
        github: 'ijo ijo.github.com',
        name:"vending"
      };
    this.antsim = {
        text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id libero vitae metus interdum viverra. Aenean fringilla sem hendrerit, ornare velit quis, sagittis lorem. Ut pulvinar placerat erat, vitae ornare nulla rhoncus ac. In congue nec arcu a vehicula. Quisque aliquet sapien sit amet ipsum mattis euismod. Nulla euismod at metus et interdum. Etiam felis felis, dapibus et imperdiet non, gravida cursus enim.',
               'Vestibulum aliquet ex ut molestie egestas. Suspendisse molestie orci eu quam porta, nec efficitur nunc aliquet. Etiam tincidunt metus eu posuere dignissim. Nullam sodales, elit nec pretium pulvinar, enim ipsum porta nisl, ac consectetur orci turpis vitae ipsum. Quisque felis tellus, maximus at mollis volutpat, sollicitudin sit amet ipsum. Suspendisse dapibus fringilla risus et mattis. Suspendisse ante dui, volutpat at lacus non, tristique convallis nibh. Proin at nisl interdum, fringilla arcu gravida, gravida purus. Curabitur commodo velit dignissim felis ullamcorper pellentesque.'],
        imgs: [antsim1],
        github: 'ijo ijo.github.com',
        name:"antsim"
      };
};


toggle(){
    this.setState({isOpen: !this.state.isOpen})
}




render() {
return (
    <div className = "body">
      <p className="projects_categories">•Ostatnie</p>
      <Expandable language={"Python"} name={"Pyttleships"}>
          <ProjectCard text={this.pyttleships.text} imgs={this.pyttleships.imgs} github={this.pyttleships.github} name={this.pyttleships.name}/>
      </Expandable>
      <Expandable language={"Kotlin"} name={"FTPDisplayer"}>
          <ProjectCard text={this.ftp.text} imgs={this.ftp.imgs} github={this.ftp.github} name={this.ftp.name}/>
      </Expandable>
      <Expandable language={"Asp"} name={"NFZSim"}>
          <ProjectCard text={this.nfz.text} imgs={this.nfz.imgs} github={this.nfz.github} name={this.nfz.name}/>
      </Expandable>
      <Expandable language={"Vhdl"} name={"PTC2075"}>
          <ProjectCard text={this.pct.text} imgs={this.pct.imgs} github={this.pct.github} name={this.pct.name}/>
      </Expandable>
      <p className="projects_categories">•Starsze</p>
      <Expandable language={"Verilog"} name={"VendingMachineTB"}>
          <ProjectCard text={this.vending.text} imgs={this.vending.imgs} github={this.vending.github} name={this.vending.name}/>
      </Expandable>
      <Expandable language={"Vhdl"} name={"BROWAR"}>
          <ProjectCard text={this.browar.text} imgs={this.browar.imgs} github={this.browar.github} name={this.browar.name}/>
      </Expandable>
      <Expandable language={"Cpp"} name={"ConsoleBlackjack"}>
          <ProjectCard text={this.blackjack.text} imgs={this.blackjack.imgs} github={this.blackjack.github} name={this.blackjack.name}/>
      </Expandable>
      <p className="projects_categories">•W trakcie</p>
      <Expandable language={"Python"} name={"Spectro"}>
          <ProjectCard text={this.spectro.text} imgs={this.spectro.imgs} github="" name={this.spectro.name}/>
      </Expandable>
      <Expandable language={"Python"} name={"Antsim"}>
          <ProjectCard text={this.antsim.text} imgs={this.antsim.imgs} github="" name={this.antsim.name}/>
      </Expandable>
    </div>
);
}
}
 
export default Projects;