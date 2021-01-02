import React, { Component } from 'react'
import './App.css';
import './components/css/nav.css';
import Logo from './utils/logo';
import Nav from './components/menu';
import Users from './components/Users';
import Images from './images/img';
import Button from './components/button/button';
import Header from './components/header';
import Home  from './components/home/home';
import Section1 from './components/home/section1';
import Section2 from './components/home/section2';
import About from './components/home/About';
import Bloc from './components/home/bloc';
import Burger from './components/Burger/Burger';

import { Switch , Route } from 'react-router-dom';
import { Router }  from 'react-router-dom';

import Contact from "./page/Contact";
import NotFound from "./page/NotFound";
import Accueil from './page/Accueil';
import Footer from './components/footer';
import Formulaire from './components/forms/formulaire';
import Inscription from './components/Inscription/inscription';
import Reservation from './components/Reservation/reservation';
import EditReservation from './components/Reservation/editReservation';
import Connexion from './components/login/connexion';



export default class App extends Component {
  state = {
    isNavMobileActive: false,


  };

   // burgerCallback toggle le booléen isNavMobileActive de true à false
  // ceci cause le re-render du component app et des components enfants (et donc de la nav mobile)
  burgerCallback = () =>
    this.setState({ isNavMobileActive: !this.state.isNavMobileActive });
  
  render() {
    return (
      <>
      {/* <Router> */}
      <div className="App">
        
        <Header isNavMobileActive ={this.state.isNavMobileActive}burgerCallback={this.burgerCallback}/>
      
      <Bloc/>
      
      </div>
      
      <main className="main">
      <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Accueil" component={Accueil}/>
                <Route path="/Contact" component={Contact}/>
                <Route path="/Inscription" component={Inscription}/>
                <Route path="/Reservation" component={Reservation}/>
                <Route path="/editreservation/:id" component={EditReservation}/>
                <Route path="/Connexion" component={Connexion}/>
        </Switch>
           
    {/* <Home/> 
    <Section1/>
    <Section2/>
    <About/> */}
   
      </main> 
      <div className="App2">
        
    
        <Footer/>
        
      </div>
      {/* </Router> */}
    </>
    
    )
  }
}



