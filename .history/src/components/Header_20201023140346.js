import React from 'react';
import logoblanco from '../img/logoblanco.png';
import Container from '@material-ui/core/Container';

const Header = () => {
    return (
        <div>
            <Container maxWidth="sm">
            <img  src={logoblanco}/>
            </Container>
        </div>
    )
}

export default Header
