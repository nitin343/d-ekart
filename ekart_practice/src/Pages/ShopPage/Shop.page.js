import React from 'react'
import ShopPage from './ShopPage.component'
import {motion } from 'framer-motion';


const pageVariants = {
  
 in: {
    opacity: 1,
    x:'0',

  },
  out: {
    opacity: 0,
    x:"-100%",
    
   
  },
}; 

const pageTransition ={
    duration: 1.5,
  
 
  
    ease:"anticipate",
}




const Shop = () => {
    return(
    
        <motion.div initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>


       <ShopPage />
    </motion.div>
    )
}

export default Shop;