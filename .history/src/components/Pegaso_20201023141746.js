import React from 'react'
import pegaso from '../img/pegaso.png';
import { motion } from 'framer-motion';

const Pegaso = () => {
    return (
        <div>
             <motion.img 
             className="pegaso" 
             src={pegaso}
             whileHover={{ scale: 1.1}}/>
        </div>
    )
}

export default Pegaso
