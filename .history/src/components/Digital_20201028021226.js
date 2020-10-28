import React from 'react'
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

import { motion } from "framer-motion";

const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2
    }
  };
  
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };


const Digital = () => {
    return (
        <motion.div
      
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}>
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
