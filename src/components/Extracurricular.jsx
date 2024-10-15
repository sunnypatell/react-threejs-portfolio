import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { extracurricular } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({ index, title, icon, type, date, points, credential }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="w-full flex gap-4 bg-tertiary p-4 rounded-lg hover:bg-black-100 transition-all"
  >
    <div className="w-16 h-16 flex-shrink-0">
      <img
        src={icon}
        alt={title}
        className="w-full h-full object-contain"
      />
    </div>
    <div className="flex-grow">
      <h3 className="text-white font-bold text-[20px]">{title}</h3>
      <p className="text-secondary text-[14px] mt-1">{type}</p>
      <p className="text-secondary text-[14px]">{date}</p>
      <ul className="mt-2 list-disc ml-5 space-y-1">
        {points.map((point, index) => (
          <li
            key={`certification-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
      <a 
        href={credential} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block mt-3 text-[14px] text-primary-600 hover:text-primary-400 transition-colors"
      >
        View Credential
      </a>
    </div>
  </motion.div>
);

const Extracurricular = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Continuous Learning
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Certifications
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col gap-5">
        {extracurricular.map((certification, index) => (
          <CertificationCard key={`certification-${index}`} index={index} {...certification} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Extracurricular, "extracurricular");