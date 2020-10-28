import React, { useState } from 'react'

import { useTrail, animated } from 'react-spring'
import Header from './Header'
import Pegaso from './Pegaso'

const items = [<Pegaso/>, <Header/>]
const config = { mass: 5, tension: 2000, friction: 200 }

const Trail = () => {
    const [toggle, set] = useState(true)
    const trail = useTrail(items.length, {
      config,
      opacity: toggle ? 1 : 0,
      x: toggle ? 0 : 20,
      height: toggle ? 80 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    })
    return (
         <div onClick={() => set(state => !state)}>
        <div>
          {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
              key={items[index]}
              
              style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
              <animated.div style={{ height }}>{items[index]}</animated.div>
            </animated.div>
            
          ))}
        </div>
      </div>
    )
}

export default Trail
