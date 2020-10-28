import React from 'react'
import pegaso from '../img/pegaso.png';
import { motion } from 'framer-motion';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}

const Pegaso = () => {
    return (
        <div>
            <Container maxWidth="sm">
            <div>
             <motion.img 
             className="pegaso" 
             src={pegaso}
             whileHover={{ scale: 1.05 }}
             transition={transition}/>
            </div>
            </Container>
        </div>
    )
}

export default Pegaso
