import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionHeadText} text-center`}>
          Software Development.
        </h3>
      </motion.div>

      <div className="hidden sm:flex">
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>

      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionHeadText} text-center`}>
          IT Tools.
        </h3>
      </motion.div>

      <div className="hidden sm:flex">
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {/* Add IT tools components here */}
        </div>
      </div>

      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionHeadText} text-center`}>
          Cybersecurity.
        </h3>
      </motion.div>

      <div className="hidden sm:flex">
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {/* Add cybersecurity components here */}
        </div>
      </div>
    </>
  );
};


export default SectionWrapper(Tech, "skills");