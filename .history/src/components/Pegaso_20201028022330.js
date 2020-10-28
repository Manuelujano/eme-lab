import React from 'react'
import pegaso from '../img/pegaso.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const transition = {
    duration: 0.8,
    ease: [0.43, 0.13, 0.23, 0.96]
  };
  
  const backVariants = {
    exit: { opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 0.8, ...transition } }
  };

const Pegaso = () => {
    return (
        <motion.div
         className="flex-container"
         variants={backVariants}
        initial="exit" animate="enter" exit="exit">
            <div className="cons">
            <Link to="/restauracion" className="link">
                <h2 className="titulos">
                    Y CONSERVACIÓN
                </h2>
                </Link>

            </div>
            <div className="res">
                
                <Link to="/restauracion" className="link">
                <h2 className="titulos">
                    RESTAURACIÓN
                </h2>
                </Link>
                

            </div>
            <div>
             <img 
             className="pegaso"
             alt="El sueño de Pegaso, Gonzalo Morales"
             src={pegaso}
            
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
            <Link to="/revelado" className="link">
                <h2 className="titulos">
                    REVELADO DE PELÍCULA<br/>
                    (B/N y COLOR)
                </h2>
            </Link>
            </div>

            <div className="tabla">
                

            </div>

        </motion.div>

      
    
    
    )
}

export default Pegaso
