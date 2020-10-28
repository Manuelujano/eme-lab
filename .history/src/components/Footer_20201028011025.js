import React from 'react';

import { Link } from 'react-router-dom';




const Footer = () => {
    return (
        <footer className="footer">
        
       
       
        <table border="0" align="center">
            <tr>
                <td>
                <div className="direc">
                <a href="https://www.youtube.com/" target="_blank">Prado Norte 135 PB, Lomas de Chapultepec<br/> 11000, Ciudad de México</a>
                </div>
                </td>
                <td>
                <div className="contac">
                <a href="mailto:contacto@eme-lab.com" target="_blank">Más información:<br/>contacto@eme-lab.com</a>
                </div>
                </td>
                <td>
                <div className="inst">
                <a href="https://www.instagram.com/emelaboratoriodearte/" target="_blank">Ig. @emelaboratoriodearte</a>
                <br/> <a>t. (521) 3872 7556/(55) 4447 6087</a> 
                </div>
                </td>
                
            </tr>
        </table>
    
    
        </footer>
    )
}

export default Footer
