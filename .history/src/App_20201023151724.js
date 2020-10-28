import React from 'react';
import Header from './components/Header';
import Motion from './components/Motion';
import Pegaso from './components/Pegaso';
import { AnimetePresence } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Prueba from './components/Prueba';
import Trail from './components/Trail';




function App() {
  return (
  <Router>
  <Header/>
  <Route
  render={({location})=> (
    <AnimetePresence initial={false} exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
      <Route exact path='/' render={<Pegaso/>}/>
      <Route path='/digital' render={<Prueba/>}/>
      </Switch>
    </AnimetePresence>
  )}
  
  />
  
  <Pegaso></Pegaso>
   {/* <Prueba></Prueba> */}
   {/* <Trail></Trail> */}

  {/*  <Motion></Motion> */}

  </Router>
  );
}

export default App;
