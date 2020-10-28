import React from 'react'
import { motion } from "framer-motion"
import Pegaso from './Pegaso'

const Motion = () => {
    
    return (
        <div>
            <motion.div animate={{ rotate: 360 }} 
            transition={{ duration: 2 }}>
                <Pegaso></Pegaso>
            </motion.div>
        </div>
    )
}

export default Motion
