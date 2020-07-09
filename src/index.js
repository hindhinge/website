import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, withRouter, Switch, Link} from 'react-router-dom';
import './index.css';
import App from './App';
import About from './About'
import Header from './Header'
import Home from './Home'
import * as serviceWorker from './serviceWorker';
import Projects from './Projects';
import Contact from './Contact';
import Body from './Body'
import Layout from './Layout';
import {createBrowserHistory} from 'history'

const history = createBrowserHistory();

const _home = () => (
  <div>
    <Home/>
  </div>

)

const _about = () => (
  <div>
    <About/>
  </div>

)

const _contact = () => (
  <div>
    <Contact/>
  </div>

)

const _projects = () => (
  <div>
    <Projects/>
  </div>

)
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
