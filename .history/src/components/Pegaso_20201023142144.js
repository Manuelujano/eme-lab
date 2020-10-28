import React from 'react'
import pegaso from '../img/pegaso.png';
import { motion } from 'framer-motion';
import Container from '@material-ui/core/Container';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}

const Pegaso = () => {
    return (
        <div>
            <Container maxWidth="sm">
             <motion.img 
             className="pegaso" 
             src={pegaso}
             whileHover={{ scale: 1.05 }}
             transition={transition}/>
            </div>
            </Container>
            <div>
        </div>
    )
}

export default Pegaso
