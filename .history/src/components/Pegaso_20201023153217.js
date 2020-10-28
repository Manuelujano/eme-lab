import React, { useState } from 'react'
import pegaso from '../img/pegaso.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { useTrail, animated } from 'react-spring'
import '../index.css'

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}
const items = ['IMPRESIÓN', 'DIGITAL']
const config = { mass: 5, tension: 2000, friction: 20}

const Pegaso = () => {
    const [toggle, set] = useState(true)
    const trail = useTrail(items.length, {
      config,
      opacity: toggle ? 1 : 0,
      x: toggle ? 0 : 20,
      height: toggle ? 80 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        <div>
            
            <div>
             <motion.img 
             className="pegaso" 
             src={pegaso}
             whileHover={{ scale: 1.02 }}
             transition={transition}/>
            </div>
        <Link to={'/digital'}>
            <div className="trails-main" onClick={() => set(state => !state)}>
            <div>
            {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.div style={{ height }}>{items[index]}</animated.div>
            </animated.div>
        ))}
            </div>
            </div>
        </Link>
        
        </div>
    )
}

export default Pegaso
