import React from "react";
import { motion } from "framer-motion";
import SignUp from "../../Component/SignUp/SignUp.component";
import './signUp.scss';
const pageVariants = {
    
 in: {
    opacity: 1,
    x:0,
scale: 0.9
  },
  out: {
    opacity: 0,
      x:"100%",
    scale: 0.8,
   
  },
};

const pageTransition ={
    duration: 1,
    transition: "linear",
    type:"spring",
    stifness: 5,
    ease:"anticipate",
}

const Sign = () => (
  <motion.div initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
 >

  
      <SignUp />
   
  </motion.div>
);
export default Sign;
