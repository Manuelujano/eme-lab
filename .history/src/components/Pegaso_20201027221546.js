import React from 'react'
import pegaso from '../img/pegaso.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }


const Pegaso = () => {
    return (
        <div className="flex-container">
            <motion.div className="cons">
                <h2 className="titulos">
                    Y CONSERVACIÓN
                </h2>

            </motion.div>
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
            />
            </div>
            <div className="contdig">
                <Link to="/digital" className="link">
                <h2 className="titulos">
                    IMPRESIÓN <br/> DIGITAL
                </h2>
                </Link>
            </div>
            <div className="rev">
                <h2 className="titulos">
                    REVELADO DE PELÍCULA<br/>
                    (B/N y COLOR)
                </h2>
            </div>

            <div className="tabla">
                

            </div>

        </div>

      
    
    
    )
}

export default Pegaso
