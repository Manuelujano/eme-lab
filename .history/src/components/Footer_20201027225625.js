import React from 'react';

import { Link } from 'react-router-dom';

import logoblanco from '../img/logoblanco.png';


const Footer = () => {
    return (
        <footer>
            
  
            <Link to='/'>
            <img  className="logo" src={logoblanco}/>
            </Link>
    
        </footer>
    )
}

export default Footer
