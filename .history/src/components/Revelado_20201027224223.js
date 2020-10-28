import React from 'react'
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

const Revelado= () => {
    return (
        <div>
            <Container maxWidth="sm">
            <div className="container">
            <div className="boton">
            <Link to='/'>
                <IconButton >
                <ArrowBackIcon  fontSize="large" color="inherent"/>
                </IconButton>
            </Link>
            </div>    
            <h1 className="tituloin">Revelado</h1>
            

            <h2 className="textos">Blanco y negro<br/>
Color</h2>
            
             </div>
            </Container>
        </div>
    )
}

export default Revelado
