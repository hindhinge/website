import React, { Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import  './About.css';
import App from './App'
import Header from './Header'
import me from './img/photo_me.jpg'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

  lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lacus eu arcu volutpat porta. Morbi quis aliquet risus. Donec bibendum blandit aliquet. Curabitur consequat justo vel cursus ullamcorper. Duis blandit sodales enim, ut efficitur nulla scelerisque vel. Nullam in velit suscipit, ultrices sapien ac, sollicitudin ex. Aenean sed erat quis nibh iaculis pulvinar. Duis ac venenatis justo. Mauris consectetur ornare blandit. Maecenas et leo lacus. In convallis turpis vitae lectus aliquet, luctus fermentum ligula maximus. Phasellus lobortis pharetra ex ac pellentesque. Fusce elementum, sem in euismod convallis, augue leo commodo eros, et tincidunt justo justo a purus. Ut mattis imperdiet ligula, vitae egestas magna hendrerit eget. Cras vulputate dapibus lobortis. Fusce faucibus ultrices condimentum.'
  text_pl_hi = 'Cześć!'
  text_pl_1 = 'Nazywam się Radosław Sawicki, aktualnie jestem studentem na kierunku Elektronika i Telekomunikacja, Wydziału Elektroniki Mikrosystemów i Fotoniki Politechniki Wrocławskiej. Interesuję się programowaniem, zwłaszcza w Pythonie, choć miałem przyjemność tworzyć aplikacje z wykorzystaniem C++ i C# oraz projekty układów elektronicznych za pomocą VHDL i Verilog.'
  text_pl_2 = 'W 2017 roku ukończyłem technikum informatyczne, gdzie głębiej zainteresowałem się tematyką programowania, oraz postanowiłem związać swoją przyszłość z tą dziedziną. Po ukończeniu technikum postanowiłem rozpocząć obecne studia, aby lepiej zrozumieć sposób w jakim działa i komunikuje się ze sobą sprzęt elektroniczny.'
  text_pl_3 = 'W wolnym czasie interesuję się grami komputerowymi, czytam sporo książek (głównie Sci-fi), a dodatkowo szkolę swoję umiejętności kulinarne.'
  text_pl_4 = 'Jestem osobą otwartą na nowe doświadczenia i znajomości, więc zachęcam do kontaktu :)'
  

  text_en_hi = 'Hello!'
  text_en_1 ='My name is Radosław Sawicki, I am student of the Faculty of Microsystem Electronics and Photonics of Wrocław University of Science and Technology, majoring in Electronics and Telecommunications. I am interested in programming, especially in Python, although I had the pleasure to create applications using C++ and C#, as well as design electronic devices with VHDL and Verilog. '
  text_en_2 ='In 2017 year I graduated Vocational Technical High School for Computer Science, where I became interested in subject of programming, and decided to pursue a career in this field. After graduating from high school I decided to start my current studies in order to better understand how do electronic systems work and communicate. '
  render() {
    return (
        <div className = "body">
          <div className='photo_container'>
            <img src={me} className='photo_me'/>
          </div>
            <div className='text_container'>
              <p className='hi'>{this.props.language=='en'?this.text_en_hi:this.text_pl_hi}</p>
              <p className='about_text'>{this.props.language=='en'?this.text_en_1:this.text_pl_1}</p>
              <p className='about_text'>{this.props.language=='en'?this.text_en_2:this.text_pl_2}</p>
              <p className='about_text'>{this.props.language=='en'?this.text_en_3:this.text_pl_3}</p>
              <p className='about_text'>{this.props.language=='en'?this.text_en_4:this.text_pl_4}</p>
            </div>
          
        </div>
    );
  }
}
 
export default About;