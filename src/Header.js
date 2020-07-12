import React, { Component} from 'react';
import {BrowserRouter as Router, Link, Redirect} from 'react-router-dom'
import  './Header.css';
import { Button } from 'reactstrap';
import App from './App'
import Contact from './Contact'
import flag_pl from './img/flag_pl.png'
import flag_uk from './img/flag_uk.png'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {logo: '<Sawicki />',
                    link: '/about',
                    showing: false,
                    language:'',
                    current:'about'               
    };
        this.showContact = this.showContact.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
        this.setCurrent = this.setCurrent.bind(this);
        
      }


componentDidMount(){
  this.setState({language:this.props.language})
}

showContact(){
  this.setState({showing:!this.state.showing})
}  

changeLanguage(){
  if (App.language == 'pl'){
    App.language = 'en';
    this.setState({language:'en'});
  } else {
    App.language = 'pl';
    this.setState({language:'pl'});
  }
}

setCurrent(location){
  this.setState({current:location});
  console.log("set currnet działa" + location)
}


  render() {
    if(this.state.language == 'pl'){
      return (
        <div className = "header">
            {this.state.showing?<Contact header={this} language='pl'/>:<div></div>}
            <p className = "text_logo">{this.state.logo}</p>    
            <Link to='/pl/about' className='text_about' onClick={()=>this.setCurrent("about")}>O mnie</Link>
            <Link to='/pl/projects' className = "text_projects" onClick={()=>this.setCurrent("projects")}>Projekty</Link>
            <p className = 'text_contact' onClick={this.showContact}>Kontakt</p>
            <Link to={'/en/'+this.state.current}><div className='language'><img src={flag_uk} className='language' onClick={this.changeLanguage}/></div></Link>
        </div>
    );
    } else {
      return (
        <div className = "header">
            {this.state.showing?<Contact header={this} language='en'/>:<div></div>}
            <p className = "text_logo">{this.state.logo}</p>
            <Link to='/en/about' className='text_about' onClick={()=>this.setCurrent("about")}>About</Link>
            <Link to='/en/projects' className = "text_projects" onClick={()=>this.setCurrent("projects")}>Projects</Link>
            <p className = 'text_contact' onClick={this.showContact}>Contact</p>
            <Link to={'/pl/'+this.state.current} className='language'><img src={flag_pl} className='language' onClick={this.changeLanguage}/></Link>
        </div>
    );
    }
  }
}
 
export default Header;