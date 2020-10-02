import * as React from "react";
import { motion } from "framer-motion";
import  MenuItem  from "./MenuItem";
import styles from "./mobileNav.module.scss"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Navigation = ({toggle}) => (
    
  <motion.ul className={styles.listWrapper} variants={variants}>
      <div>{console.log("toggle",toggle)}</div>
    {itemIds.map(i => (
      <MenuItem  i={i} toggle key={i} />
    ))} 
  </motion.ul>
  
);

const itemIds = [0, 1, 2, 3, 4];
export default Navigation;