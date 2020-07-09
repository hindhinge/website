import React, { Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import  './Body.css';


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false,
                     setIsOpen:false
        }
        this.toggle = this.toggle.bind(this)
    };


    toggle(){
        this.setState({isOpen: !this.state.isOpen})
    }

  render() {
    return (
        <div className = "body">
            <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
            <Collapse isOpen={this.state.isOpen}>
             <Card>
             <div className = "body">
          <p>

          Anim pariatur cliche reprehenderit,
           enim eiusmod high life accusamus terry richardson ad squid. Nihil
           anim keffiyeh helvetica, craft beer labore wes anderson cred
           nesciunt sapiente ea proident.
           </p>
           </div>
        </Card>
      </Collapse>
        </div>
    );
  }
}
 
export default About;