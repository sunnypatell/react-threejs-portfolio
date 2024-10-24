import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Import all assets
import {
  python,
  javascript,
  java,
  cplusplus,
  typescript,
  html,
  css,
  reactjs,
  postgresql,
  mongodb,
  git,
  aws,
  ubuntu,
  powershell,
  linux,
  cisco,
  connectwise,
  virtualbox,
  kalilinux,
  wireshark,
  nmap,
  johntheripper,
  photoshop,
  premiere,
  cinema4d,
} from "../assets";

const programming = [
  { name: "Python", icon: python },
  { name: "Java", icon: java },
  { name: "C++", icon: cplusplus },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "HTML 5", icon: html },
  { name: "CSS", icon: css },
  { name: "React JS", icon: reactjs },
  { name: "PostgreSQL", icon: postgresql },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
];

const itTools = [
  { name: "AWS", icon: aws },
  { name: "Ubuntu", icon: ubuntu },
  { name: "PowerShell", icon: powershell },
  { name: "Linux", icon: linux },
  { name: "Cisco", icon: cisco },
  { name: "ConnectWise", icon: connectwise },
  { name: "VirtualBox", icon: virtualbox },
  { name: "Kali Linux", icon: kalilinux },
  { name: "Wireshark", icon: wireshark },
  { name: "Nmap", icon: nmap },
  { name: "John the Ripper", icon: johntheripper },
];

const contentProduction = [
  { name: "Photoshop", icon: photoshop },
  { name: "Premiere Pro", icon: premiere },
  { name: "Cinema 4D", icon: cinema4d },
];

const Tech = () => {
  const [rows, setRows] = useState({
    programming: [],
    itTools: [],
    contentProduction: [],
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const calculateRows = (width, techArray) => {
    let dynamicRows = [];
    let startIndex = 0;
    let rowSize = 6;

    if (width < 500) {
      // For smaller screens
      dynamicRows = [
        techArray.slice(0, 3),
        techArray.slice(3, 5),
        techArray.slice(5, 8),
        techArray.slice(8, 10),
      ];
    } else {
      // For larger screens, alternate between rows of 6 and 5 items
      while (startIndex < techArray.length) {
        const endIndex = startIndex + rowSize;
        dynamicRows.push(techArray.slice(startIndex, endIndex));
        startIndex += rowSize;
        rowSize = rowSize === 6 ? 5 : 6;
      }
    }

    return dynamicRows;
  };

  useEffect(() => {
    const calculateRowsForAllCategories = () => {
      const rowsData = {
        programming: calculateRows(window.innerWidth, programming),
        itTools: calculateRows(window.innerWidth, itTools),
        contentProduction: calculateRows(window.innerWidth, contentProduction),
      };
      setRows(rowsData);
    };

    calculateRowsForAllCategories();

    const handleResize = () => {
      calculateRowsForAllCategories();
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderCategory = (categoryName, categoryRows) => (
    <motion.div
      key={categoryName}
      className="category-container"
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
    >
      <motion.h2
        className="category-title top"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        style={{
          fontFamily: "'', cursive",
          fontSize: "26px",
          background: "linear-gradient(90deg, #915EFF, #00BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          filter: "drop-shadow(0 0 10px #915EFF)",
        }}
      >{`<${categoryName}>`}</motion.h2>
      <div className="honeycomb-grid">
        {categoryRows?.map((row, rowIndex) => (
          <div
            key={`${categoryName}-row-${rowIndex}`}
            className={`honeycomb-row ${rowIndex % 2 === 1 ? "staggered-row" : ""}`}
          >
            {row.map((tech) => (
              <motion.div
                key={tech.name}
                className="hexagon"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { 
                    opacity: 1, 
                    scale: 1, 
                    transition: { 
                      delay: Math.random() * 1.5, 
                      duration: 0.5, 
                      type: "spring" 
                    } 
                  },
                }}
              >
                <img src={tech.icon} alt={tech.name} />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      <motion.h2
        className="category-title bottom"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        style={{
          fontFamily: "'', cursive",
          fontSize: "26px",
          background: "linear-gradient(90deg, #915EFF, #00BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          filter: "drop-shadow(0 0 10px #915EFF)",
        }}
      >{`<${categoryName}/>`}</motion.h2>
    </motion.div>
  );

  return (
    <section className="skills" ref={ref}>
      <div className="container">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Technical Proficiencies</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
        </motion.div>
        {renderCategory("programming", rows.programming)}
        {renderCategory("itTools", rows.itTools)}
        {renderCategory("contentProduction", rows.contentProduction)}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");