import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Directly import assets
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
  {name: "Wireshark", icon: wireshark},
  {name: "Nmap", icon: nmap},
  {name: "John the Ripper", icon: johntheripper}
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
    contentProduction: []
  });

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
    // Calculate rows for each category based on window width
    const rowsData = {
      programming: calculateRows(window.innerWidth, programming),
      itTools: calculateRows(window.innerWidth, itTools),
      contentProduction: calculateRows(window.innerWidth, contentProduction),
    };
    setRows(rowsData);

    const handleResize = () => {
      const resizedRowsData = {
        programming: calculateRows(window.innerWidth, programming),
        itTools: calculateRows(window.innerWidth, itTools),
        contentProduction: calculateRows(window.innerWidth, contentProduction),
      };
      setRows(resizedRowsData);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderCategory = (categoryName, categoryRows) => (
    <div key={categoryName}>
      <h2 className="category-title">{`<${categoryName}>`}</h2>
      <div className="honeycomb-grid">
        {categoryRows?.map((row, rowIndex) => (
          <div
            key={`${categoryName}-row-${rowIndex}`}
            className={`honeycomb-row ${rowIndex % 2 === 1 ? "staggered-row" : ""}`}
          >
            {row.map((tech) => (
              <div key={tech.name} className="hexagon">
                <img src={tech.icon} alt={tech.name} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <h2 className="category-title">{`</${categoryName}>`}</h2>
    </div>
  );

  return (
    <section className="skills">
      <div className="container">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>My technical proficiencies</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
        </motion.div>
        {renderCategory("programming", rows.programming)}
        {renderCategory("itTools", rows.itTools)}
        {renderCategory("contentProduction", rows.contentProduction)}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
