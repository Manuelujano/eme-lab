import React from 'react';
import Header from './components/Header';
import Pegaso from './components/Pegaso';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Digital from './components/Digital';
import Restauracion from './components/Restauracion';
import Revelado from './components/Revelado';
import Footer from './components/Footer';




function App() {
  
  return (
  <Router>
    <Header/>
    
  
    <AnimatePresence>
      <Switch>
      <Route exact path='/' render={()=> <Pegaso/>}/>
      <Route path='/digital' render={()=> <Digital/>}/>
      <Route path='/restauracion' render={()=> <Restauracion/>}/>
      <Route path='/revelado' render={()=> <Revelado/>}/>
      </Switch>
    </AnimatePresence>
   

    <Footer/>
  </Router>
  );
}

export default App;
