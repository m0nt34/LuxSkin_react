import style from "./style.module.css";
import React from "react";
import { easeInOut, motion } from "framer-motion";

const Index = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className={style.slide_in}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1.2 }} 
        transition={{ duration: 1, ease: easeInOut }}
      />
      <motion.div
        className={style.slide_out}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: easeInOut }}
      />
    </>
  );
};

export default Index;
