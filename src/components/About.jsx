import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { resume } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="w-full xs:w-[250px]"
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative overflow-hidden">
        <motion.img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0"
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  </motion.div>
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
        👨‍💻 I&apos;m a Software Engineer with over 4 years of experience in software development and cloud technologies.

        🎓 Currently working toward my Honours Bachelor of Science in Computer Science at Ontario Tech University, I&apos;m all about building reliable, scalable software that makes a difference.

        🛠 From full-stack development to cloud-based solutions, I&apos;ve led enterprise-level projects that streamline operations and deliver real impact.

        🔧 I enjoy automating workflows, optimizing systems, and turning complex challenges into real results. 📈

        I&apos;m always curious and constantly learning.💡
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10">
        <motion.button
          className="mt-4 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform transition duration-500 ease-in-out hover:scale-105 active:translate-y-1 active:shadow-none no-select"
          style={{boxShadow: '0px 5px 0px 0px rgba(0,0,0,0.6)', transition: 'all ease 0.1s'}}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open(resume, "_blank")}
        >
          <span className="font-semibold">Resume</span>
        </motion.button>

        <motion.button
          className="mt-4 px-6 py-3 text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-md shadow-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform transition duration-500 ease-in-out hover:scale-105 active:translate-y-1 active:shadow-none no-select"
          style={{boxShadow: '0px 5px 0px 0px rgba(0,0,0,0.6)', transition: 'all ease 0.1s'}}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open("https://www.linkedin.com/in/sunny-patel-30b460204/", "_blank")}
        >
          <span className="font-semibold">LinkedIn</span>
        </motion.button>

        <motion.button
          className="mt-4 px-6 py-3 text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-md shadow-md hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transform transition duration-500 ease-in-out hover:scale-105 active:translate-y-1 active:shadow-none no-select"
          style={{boxShadow: '0px 5px 0px 0px rgba(0,0,0,0.6)', transition: 'all ease 0.1s'}}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open("https://github.com/sunnypatell", "_blank")}
        >
          <span className="font-semibold">GitHub</span>
        </motion.button>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-10 no-select">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");