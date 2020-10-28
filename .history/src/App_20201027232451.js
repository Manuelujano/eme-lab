import React from 'react';
import Header from './components/Header';
import Motion from './components/Motion';
import Pegaso from './components/Pegaso';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

import Prueba from './components/Prueba';

import Digital from './components/Digital';
import Trail from './components/Trail';
import Restauracion from './components/Restauracion';
import Revelado from './components/Revelado';
import Footer from './components/Footer';




function App() {
 
  return (
  <Router>
    <Header/>
  
    
      <Switch>
      <Route exact path='/' render={()=> <Pegaso/>}/>
      <Route path='/digital' render={()=> <Digital/>}/>
      <Route path='/restauracion' render={()=> <Restauracion/>}/>
      <Route path='/revelado' render={()=> <Revelado/>}/>
      </Switch>
   

    <Footer/>
  </Router>
  );
}

export default App;
