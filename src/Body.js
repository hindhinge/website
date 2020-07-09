import React, { Component } from 'react';
import  './Body.css';
import { Button } from 'reactstrap';

const Body = (props) => {
  return (
    <div className="body">
        {props.children}
    </div>
  )
};
 
export default Body;