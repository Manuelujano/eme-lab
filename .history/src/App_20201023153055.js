import React from 'react';
import Header from './components/Header';
import Motion from './components/Motion';
import Pegaso from './components/Pegaso';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Prueba from './components/Prueba';
import Trail from './components/Trail';
import Digital from './components/Digital';




function App() {
  return (
  <Router>
  <Header/>
  <Route
  render={({location})=> (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
      <Route exact path='/' render={()=> <Pegaso/>}/>
      <Route path='/digital' render={()=> <Digital/>}/>
      </Switch>
    </AnimatePresence>
    
  

  

   {/* <Prueba></Prueba> */}
   {/* <Trail></Trail> */}

  {/*  <Motion></Motion> */}

  </Router>
  );
}

export default App;
