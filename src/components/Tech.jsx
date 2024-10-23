import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed

  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionHeadText} text-center`}>
          Skills.
        </h3>
      </motion.div>

      <div className={`${isMobile ? 'grid grid-cols-2 gap-4 place-items-center' : 'hidden sm:flex flex-row flex-wrap justify-center gap-10'}`}>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
