import React, { Component } from 'react';
import logo from './logo.svg';
import './App2.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import {BrowserRouter as Router, Route, Link, Switch, withRouter} from 'react-router-dom'
import Header from './Header'
import Body from './Body'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Home from './Home'
import Layout from './Layout'
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {

  componentDidMount(){
    console.log(window.location.toString())
  }

  // render() {
  //   return (
  //     <Router>
  //       <div>
  //         <Header/>
  //         <Route exact path='/' component={Home}/>
  //         <Route path='/about' component={About}/>
  //         <Route path='/contact' component={Contact}/>
  //         <Route path='/projects' component={Projects}/>
  //       </div>
  //     </Router>
  //   );
  // }
  render() {
    return (
      <div>
      <Router>
        <Header/>
          <Switch>
            <Route exact path = '/' component = {Home}/>
            <Route path = '/about' component = {About}/>
            <Route path = '/contact' component = {Contact}/>
            <Route path = '/projects' component = {Projects}/>
          </Switch>
      </Router>
      </div>
    );
  }
}
export default App;
