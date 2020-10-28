import React from 'react';;
import { Link } from 'react-router-dom';
import logoblanco from '../img/logoblanco.png';
import Container from '@material-ui/core/Container';

const Header = () => {
    return (
        <header>
            
            <Container maxWidth="sm">
            <Link to='/'>
            <img  className="logo" src={logoblanco}/>
            </Link>
            </Container>
        </header>
    )
}

export default Header
