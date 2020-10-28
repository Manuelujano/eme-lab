import React from 'react'
import pegaso from '../img/pegaso.png';
import { motion } from 'framer-motion';



const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}

const Pegaso = () => {
    return (
        <div className="flex-container">
        <div className="tabla">
        <table border="1" aling="center">
        <tbody>
            <tr className="consr">
            <td>
                
            </td>
            <td> 
            <div className="cons">
                <h2 className="titulos">
                    Y CONSERVACIÓN
                </h2>

            </div>
            </td>
            <td >
                
            </td>
            </tr>
            <tr>
            <td >
            <div className="res">
                <h2 className="titulos">
                    RESTAURACIÓN
                </h2>

            </div>
            </td>
            <td ><div>
             <motion.img 
             className="pegaso" 
             src={pegaso}
             whileHover={{ scale: 1.02 }}
             transition={transition}/>
            </div></td>
            <td >
            <div className="contdig">
                <h2 className="titulos">
                    IMPRESIÓN <br/> DIGITAL
                </h2>
            </div>
            </td>
            </tr>
            <tr >
            <td >
                
            </td>
            <td >
            <div className="rev">
                <h2 className="titulos">
                    REVELADO DE PELÍCULA<br/>
                    (B/N y COLOR)
                </h2>
            </div>
            </td>
            <td></td>
            </tr>
        </tbody>
        </table>


            </div>

        </div>

      
    
    
    )
}

export default Pegaso
