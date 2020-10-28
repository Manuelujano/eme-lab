import React from 'react'
import Container from '@material-ui/core/Container';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

const Digital = () => {
    return (
        <div>
            <Container maxWidth="sm">
            <div className="container">
                <IconButton>
                <ArrowBackIcon style={{ color: black[000]}} />
                </IconButton>
            <h1 className="tituloin">Impresión</h1>
            

            <h2 className="textos">Impresión digital con inyección
                de tintas EPSON Ultrachrome HDX</h2>
            <h1 className="tituloin">Digitalización</h1>
            <h2 className="textos">Digitalización de negativos con
                sensor CMOS Full Frame de 50.6 megapixeles
                Cama plana Epson V850 Pro</h2>
             </div>
            </Container>
        </div>
    )
}

export default Digital