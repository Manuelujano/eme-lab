import React from 'react';

import { Link } from 'react-router-dom';

import logoblanco from '../img/logoblanco.png';


const Header = () => {
    return (
        <header>
            
  
            <Link to='/'>
            <img  className="logo" src={logoblanco}/>
            </Link>
    
        </header>
    )
}

export default Header
