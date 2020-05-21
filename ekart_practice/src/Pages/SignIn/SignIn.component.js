import React from "react";
import "./signIn.style.scss";
import SearchBar from "../../Component/SearchBar/SearchBar";
import LogIn from "../../Component/SignIn/SignIn.component";
import { motion } from "framer-motion";

const pageVariants = {
    initial: {
        opacity: 0,
        y:"-100%",
        scale: 0.8
    },
 in: {
    opacity: 1,
    y:0,
scale: 0.9
  },
  out: {
    opacity: 0,
    y:"100%",
    scale: 0.8,
   
  },
};

const pageTransition ={
    duration: 1.5,
    transition: "linear",
    type:"spring",
    stifness: 10,
    ease:"anticipate",
}

const SignIn = () => (
  <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>

    <div className="signIn">
      <LogIn />
    </div>
  </motion.div>
);
export default SignIn;
