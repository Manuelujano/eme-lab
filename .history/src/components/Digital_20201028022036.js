import React from 'react'
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

import { motion } from "framer-motion";

const transition = {
    duration: 0.8,
    ease: [0.43, 0.13, 0.23, 0.96]
  };
  
  const backVariants = {
    exit: { x: 100, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
  };
  


const Digital = () => {
    return (
        <motion.div
        variants={backVariants}
        initial="exit" animate="enter" exit="exit">
            <Container maxWidth="sm">
            <div className="container">
            <div className="boton">
            <Link to='/'>
                <IconButton >
                <ArrowBackIcon  fontSize="large" color="inherent"/>
                </IconButton>
            </Link>
            </div>    
            <h1 className="tituloin">Impresión</h1>
            

            <h2 className="textos">Impresión digital con inyección
                de tintas EPSON Ultrachrome HDX</h2>
            <h1 className="tituloin">Digitalización</h1>
            <h2 className="textos">Digitalización de negativos con
                sensor CMOS Full Frame de 50.6 megapixeles
                Cama plana Epson V850 Pro</h2>
             </div>
            </Container>
        </motion.div>
    )
}

export default Digital
