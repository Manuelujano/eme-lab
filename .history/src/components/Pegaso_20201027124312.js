import React from 'react'
import pegaso from '../img/pegaso.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}

const Pegaso = () => {
    return (
        <div className="flex-container">
            <div className="cons">
                <h2 className="titulos">
                    Y CONSERVACIÓN
                </h2>

            </div>
            <div className="res">
                <h2 className="titulos">
                    RESTAURACIÓN
                </h2>

            </div>
            <div>
             <motion.img 
             className="pegaso" 
             src={pegaso}
             whileHover={{ scale: 1.02 }}
             transition={transition}/>
            </div>
            <div className="contdig">
                <h2 className="titulos">
                    IMPRESIÓN <br/> DIGITAL
                </h2>
            </div>
            <div className="rev">
                <h2 className="titulos">
                    REVELADO DE PELÍCULA<br/>
                    (B/N y COLOR)
                </h2>
            </div>

            <div className="tabla">
                <table>

            </div>

        </div>

      
    
    
    )
}

export default Pegaso
