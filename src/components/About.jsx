import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Sunny Patel is a seasoned computer science and software development professional, 
        bringing over four years of industry expertise to the table. With a solid academic foundation 
        in computer science and a passion for problem-solving, Sunny is committed to delivering top-tier 
        solutions to intricate challenges. His portfolio showcases a diverse range of projects and accomplishments, 
        highlighting his dedication to excellence in every endeavor
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10">
        <button className="mt-4 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50" 
          onClick={() => window.open("https://drive.google.com/file/d/16xHITIKZF4NNFqm6DCBwFGJrQE354OzZ/view?usp=sharing", "_blank")}
        >
          <span className="font-semibold">Resume</span>
        </button>

        <button className="mt-4 px-6 py-3 text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-md shadow-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" 
          onClick={() => window.open("https://www.linkedin.com/in/sunny-patel-30b460204/", "_blank")}
        >
          <span className="font-semibold">LinkedIn</span>
        </button>

        <button className="mt-4 px-6 py-3 text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-md shadow-md hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50" 
          onClick={() => window.open("https://github.com/sunnypatell", "_blank")}
        >
          <span className="font-semibold">GitHub</span>
        </button>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
