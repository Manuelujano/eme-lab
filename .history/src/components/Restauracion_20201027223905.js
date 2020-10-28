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
            <h1 className="tituloin">Conservación y restauracion<br/>
de fotografías y documentos</h1>
            

            <h2 className="textos">Estabilización y consolidación de emulsiones<br/>
Limpieza de obras<br/>
Tratamientos para la detención de la degradación<br/>
Restauración de marcos y sistemas de montaje<br/>
Creación de embalajes de protección especiales<br/>
Producción e facsímiles para exposición<br/>
Montajes para exposición siguiendo normas de durabilidad
y conservación museográfica</h2>
            <h1 className="tituloin">Digitalización de materiales
fotográficos y obras de arte</h1>
            <h2 className="textos">Las fotografías, inevitablemente, se deterioran con el
paso del tiempo.<br/>
Al digitalizar una obra, aseguramos la posibilidad de
poder apreciar y estudiar esta pieza, aún cuando el
original sufra deterioros o pérdidas.
<br/><br/>
Acondicionamiento, limpieza y preparación de piezas
para digitalización.
Digitalización y Reproducción de obras de arte
Inserción de metadatos y catalogación.</h2>
             </div>
            </Container>
        </div>
    )
}

export default Restauracion
