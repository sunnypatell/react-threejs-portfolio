import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_project_link,
  animate,
}) => {
  return (
    <motion.div variants={animate}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag, index) => (
            <p key={index} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        {live_project_link && (
          <a href={live_project_link} target="_blank" rel="noopener noreferrer">
            <button className="mt-3 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium">
              Live Project
            </button>
          </a>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed

  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionSubText} text-center`}>
          Innovative Solutions, Games, and Creations
        </h3>
      </motion.div>

      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionHeadText} text-center`}>
          Projects.
        </h3>
      </motion.div>

      <motion.div>
        <div className={`${isMobile ? 'grid grid-cols-1 gap-4 place-items-center' : 'flex flex-wrap gap-7'}`}>
          {projects.map((project, index) => (
            <ProjectCard 
              key={`project-${index}`} 
              animate={isMobile ? {} : fadeIn("up", "spring", index * 0.5, 0.75)}
              {...project} 
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
