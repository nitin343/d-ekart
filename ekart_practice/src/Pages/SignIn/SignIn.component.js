import React from "react";
import "./signIn.style.scss";
import LogIn from "../../Component/SignIn/SignIn.component";
import { motion } from "framer-motion";

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


const SignIn = () => (
  <motion.div initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>

    <div className="signIn">
      <LogIn />
    </div>
  </motion.div>
);
export default SignIn;
