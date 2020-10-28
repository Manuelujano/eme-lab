import React from 'react';

import logoblanco from '../img/logoblanco.png';
import Container from '@material-ui/core/Container';

const Header = () => {
    return (
        <header>
            
            <Container maxWidth="sm">
            
            <img  className="logo" src={logoblanco}/>
            
            </Container>
        </header>
    )
}

export default Header
