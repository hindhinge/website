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

import Header from './Header'


class Projects extends Component {
  constructor(props) {
    super(props);
    console.log(Contact.showing);
    this.state = {isOpen: false,
    }
    this.toggle = this.toggle.bind(this)
    this.pyttleships = {
        text_pl: ['Prosta aplikacja pozwalająca zagrać użytkownikowi w statki z komputerem.','Napisana w Pythonie z wykorzystaniem Kivy w celu stworzenia interfejsu graficznego.','Celem gry jest zestrzelenie wszystkich statków przeciwnika, zanim on zniszczy wszystkie statki gracza. Strzały oddawane są naprzemiennie aż do momentu trafienia w statek; w takiej sytuacji można oddać strzał ponownie. Zachowaniem przeciwnika steruje prosty algorytm pozwalający na losowe ustawienie statków, oddawanie strzałów w losowe miejsce na planszy, oraz w razie trafienia, ostrzelanie sąsiednich pól do momentu zatopienia trafionego statku.'],
        text_en: ['',''],
        imgs: [ships1,ships2],
        github: 'ijo ijo.github.com',
        name:"ships"
      };

    this.blackjack = {
        text_pl: ['Aplikacja konsolowa pozwalająca na zagranie z komputerem w grę hazardową Blackjack.','Zachowanie krupiera zgodne jest ze strategią stosowaną w kasynach, czyli nie dobierać karty po osiągnięciu 17 punktów.'],
        text_en: ['',''],
        imgs: [blackjack1,blackjack2],
        github: 'ijo ijo.github.com',
        name:"blackjack"
      };
    
    this.browar = {
      text_pl: ['Symulacja linii produkcyjnej w browarze za pomocą języka opisu sprzętu.','Projekt zaliczeniowy kursu wprowadzającego do VHDL.','Celem projektu było zasymulowanie wszystkich etapów produkcji butelki piwa (zakup butelek i kapsli, warzenie piwa, napełnianie i kapslowanie butelek), jako pojedynczego układu elektronicznego sterowanego za pomocą sygnałów zewnętrznych, odpowiadających sygnałom przekazywanym przez czujniki. W ramach projektu została wykonana jednostka testowa pozwalająca na zweryfikowanie poprawności działania symulacji.'],
      text_en: ['',''],
      imgs: [browar1,browar2],
      github: 'ijo ijo.github.com',
      name:"browar"
      };
    this.pct = {
      text_pl: ['Projekt rzeczywistego układu scalonego PTC2075, napisany na bazie karty katalogowej elementu, zrealizowany z wykorzystaniem języka opisu sprzętu.','Urządzenie wykorzystuje maszynę stanów, sterującą zachowaniem układu, przez odpowiednią reakcję na sygnały doprowadzane przez jednostkę nadrzędną. Pozwala to na dwukierunkową komunikację za pomocą magistrali I2C, odczyt i konfigurację rejestrów wewnętrznych.'],
      text_en: ['',''],
      imgs: [pct1,pct2],
      github: 'ijo ijo.github.com',
      name:"pct"
      };
    this.ftp = {
      text_pl: ['Aplikacja mobilna napisana w Kotlinie.','Celem projektu było stworzenie aplikacji pozwalającej na połączenie się z wirtualną maszyną, z systemem z rodziny Unix, obecną na komputerze w sieci lokalnej. Po utworzeniu połączenia za pomocą protokołu SSH, na telefon pobierany jest plik tekstowy, zawierający zakodowaną informację o zdarzeniach związanych z klawiaturą, pobraną z folderu /dev/input/event. Pobrany plik tekstowy jest następnie dekodowany, a na ekranie urządzenia wyświetlane są znaki wprowadzone za pomocą klawiatury.'],
      text_en: ['',''],
      imgs: [ftp2,ftp3],
      github: 'ijo ijo.github.com',
      name:"ftp"
      };
    this.nfz = {
      text_pl: ['Aplikacja webowa symulująca panel administratora w przychodni lekarskiej.','Część aplikacji po strone serwera została wykonana w ASP.NET, natomiast część aplikacji po stronie klienta napisana została w React.','W skład aplikacji wchodzą następujące funkcje:','-Dodawanie, usuwanie oraz edycja pacjentów przychodni,','-Dodawanie, usuwanie oraz edycja lekarzy w przychodni,','-Ustalanie wizyt u poszczególnych lekarzy,','-Wysyłanie przypomnień pacjentom o wizytach za pomocą SMTP,','-Modyfikowanie bazy leków.'],
      text_en: ['',''],
      imgs: [nfz1,nfz2],
      github: 'ijo ijo.github.com',
      name:"nfz"
      };
    this.spectro = {
      text_pl: ['Program będący tematem realizowanej przeze mnie pracy dyplomowej.','Aplikacja pozwalająca na analizę częstotliwościową sygnałów zapisanych w postaci plików dźwiękowych, lub na bieżąco, z mikrofonu podłączonego do komputera.','Wyniki analizy przedstawiane są następnie w postaci kolorowego, animowanego spektrogramu.'],
      text_en: ['',''],
      imgs: [spectro1],
      github: 'ijo ijo.github.com',
      name:"spectro"
      };
    this.vending = {
      text_pl: ['Projekt zaliczeniowy kursu Weryfikacja Systemów Cyfrowych.','Celem projektu było przygotowanie jednostki testowej dla projektu układu dostarczonego przez prowadzącego kurs. Wybraną jednostką testowaną w tym przypadku był automat do sprzedaży napojów.','Jednostka testowa pozwala na zasymulowanie procesu zakupu dowolnego napoju przez użytkownika. W trakcie symulacji kontrolowany jest stan rejestrów wewnętrznych automatu, a informacje o błędach zapisywane są do pliku tekstowego.'],
      text_en: ['',''],
      imgs: [vending1,vending2],
      github: 'ijo ijo.github.com',
      name:"vending"
      };
};

componentDidMount() {
  Header.current = 'projects';
  console.log(Header.current);
}

toggle(){
    this.setState({isOpen: !this.state.isOpen})
}




render() {
return (
    <div className = "body">
      <p className="projects_categories">•Ostatnie</p>
      <Expandable language={"Python"} name={"Pyttleships"}>
          <ProjectCard text={this.props.language=='en'?this.pyttleships.text_en:this.pyttleships.text_pl} imgs={this.pyttleships.imgs} github={this.pyttleships.github} name={this.pyttleships.name}/>
      </Expandable>
      <Expandable language={"Kotlin"} name={"FTPDisplayer"}>
          <ProjectCard text={this.props.language=='en'?this.ftp.text_en:this.ftp.text_pl} imgs={this.ftp.imgs} github={this.ftp.github} name={this.ftp.name}/>
      </Expandable>
      <Expandable language={"Asp"} name={"NFZSim"}>
          <ProjectCard text={this.props.language=='en'?this.nfz.text_en:this.nfz.text_pl} imgs={this.nfz.imgs} github={this.nfz.github} name={this.nfz.name}/>
      </Expandable>
      <Expandable language={"Vhdl"} name={"PTC2075"}>
          <ProjectCard text={this.props.language=='en'?this.pct.text_en:this.pct.text_pl} imgs={this.pct.imgs} github={this.pct.github} name={this.pct.name}/>
      </Expandable>
      <p className="projects_categories">•Starsze</p>
      <Expandable language={"Verilog"} name={"VendingMachineTB"}>
          <ProjectCard text={this.props.language=='en'?this.vending.text_en:this.vending.text_pl} imgs={this.vending.imgs} github={this.vending.github} name={this.vending.name}/>
      </Expandable>
      <Expandable language={"Vhdl"} name={"BROWAR"}>
          <ProjectCard text={this.props.language=='en'?this.browar.text_en:this.browar.text_pl} imgs={this.browar.imgs} github={this.browar.github} name={this.browar.name}/>
      </Expandable>
      <Expandable language={"Cpp"} name={"ConsoleBlackjack"}>
          <ProjectCard text={this.props.language=='en'?this.blackjack.text_en:this.blackjack.text_pl} imgs={this.blackjack.imgs} github={this.blackjack.github} name={this.blackjack.name}/>
      </Expandable>
      <p className="projects_categories">•W trakcie</p>
      <Expandable language={"Python"} name={"Spectro"}>
          <ProjectCard text={this.props.language=='en'?this.spectro.text_en:this.spectro.text_pl} imgs={this.spectro.imgs} github="" name={this.spectro.name}/>
      </Expandable>
    </div>
);
}
}
 
export default Projects;