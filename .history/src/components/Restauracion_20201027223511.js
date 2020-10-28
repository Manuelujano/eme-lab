import React from 'react'
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

const Restauracion = () => {
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
            <h1 className="tituloin">Conservación y restauracion
de fotografías y documentos</h1>
            

            <h2 className="textos">Estabilización y consolidación de emulsiones
Limpieza de obras
Tratamientos para la detención de la degradación
Restauración de marcos y sistemas de montaje
Creación de embalajes de protección especiales
Producción e facsímiles para exposición
Montajes para exposición siguiendo normas de durabilidad
y conservación museográfica</h2>
            <h1 className="tituloin">Digitalización</h1>
            <h2 className="textos">Digitalización de negativos con
                sensor CMOS Full Frame de 50.6 megapixeles
                Cama plana Epson V850 Pro</h2>
             </div>
            </Container>
        </div>
    )
}

export default Restauracion
