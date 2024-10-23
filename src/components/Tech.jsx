import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Directly import assets
import {
  git,
  html,
  javascript,
  java,
  ubuntu,
  reactjs,
  linux,
  tailwind,
  postgresql,
  mongodb,
  powershell,
} from "../assets"; // Assuming assets are exported here

// Define the technologies array directly
const technologies = [
  { name: "Git", icon: git },
  { name: "HTML 5", icon: html },
  { name: "JavaScript", icon: javascript },
  { name: "Java", icon: java },
  { name: "Ubuntu", icon: ubuntu },
  { name: "React JS", icon: reactjs },
  { name: "Linux", icon: linux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "PostgreSQL", icon: postgresql },
  { name: "MongoDB", icon: mongodb },
  { name: "PowerShell", icon: powershell },
];

const Tech = () => {
  const [rows, setRows] = useState([]);

  const calculateRows = (width) => {
    let dynamicRows = [];
    let startIndex = 0;
    let rowSize = 6; // Start with 6 items in the first row

    if (width < 500) {
      // For smaller screens, we simplify and follow a different row layout
      dynamicRows = [
        technologies.slice(0, 3),
        technologies.slice(3, 5),
        technologies.slice(5, 8),
        technologies.slice(8, 10),
      ];
    } else {
      // For larger screens, alternate between rows of 6 and 5 items
      while (startIndex < technologies.length) {
        const endIndex = startIndex + rowSize;
        dynamicRows.push(technologies.slice(startIndex, endIndex));
        startIndex += rowSize;
        rowSize = rowSize === 6 ? 5 : 6; // Toggle between 6 and 5 items per row
      }
    }

    setRows(dynamicRows);
  };

  useEffect(() => {
    // Calculate rows initially based on window width
    calculateRows(window.innerWidth);

    // Recalculate rows on window resize
    const handleResize = () => calculateRows(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="skills">
      <div className="container">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>My technical proficiencies</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
        </motion.div>
        <h1 className="HTMLTags">{"<skills>"}</h1>
        <div className="honeycomb-grid">
          {rows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className={`honeycomb-row ${rowIndex % 2 === 1 ? "staggered-row" : ""}`} // Apply stagger effect on alternate rows
            >
              {row.map((tech) => {
                if (!tech || !tech.icon) return null;
                return (
                  <div key={tech.name} className="hexagon">
                    <img src={tech.icon} alt={tech.name} />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <h1 className="HTMLTags" style={{ marginLeft: "auto" }}>
          {"</skills>"}
        </h1>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
