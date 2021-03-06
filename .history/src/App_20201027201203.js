import React from 'react';
import Header from './components/Header';
import Motion from './components/Motion';
import Pegaso from './components/Pegaso';
import { AnimatePresence } from 'framer-motion';
import { Router, Switch, Route, useLocation } from 'react-router-dom';

import Prueba from './components/Prueba';

import Digital from './components/Digital';
import Trail from './components/Trail';




function App() {
  const location = useLocation();
  return (
  <Router>
  <Header/>
  
    <AnimatePresence initial={false} exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
      <Route exact path='/' component={<Pegaso/>}/>
      <Route path='/digital' component={<Digital/>}/>
      </Switch>
    </AnimatePresence>
  
  

  


  </Router>
  );
}

export default App;
