import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { itTools } from "../constants";
import { cybersecurityTools } from "../constants";
import { designTools } from "../constants";
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
          {itTools.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>

      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionHeadText} text-center`}>
          Cybersecurity/Pentesting Tools.
        </h3>
      </motion.div>

      <div className="hidden sm:flex">
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {cybersecurityTools.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>

      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionHeadText} text-center`}>
          Design Tools.
        </h3>
      </motion.div>

      <div className="hidden sm:flex">
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {designTools.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


export default SectionWrapper(Tech, "skills");