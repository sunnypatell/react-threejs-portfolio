import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Styling for the menu button and navicon
  const menuIconStyle = {
    position: 'relative',
    width: '28px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const barCommonStyle = {
    background: 'white',
    display: 'block',
    height: '2px',
    width: '18px',
    borderRadius: '2px',
    position: 'absolute',
    transition: 'all 0.2s ease-out',
  };

  const topBarStyle = {
    ...barCommonStyle,
    top: toggle ? '50%' : '5px',
    transform: toggle ? 'rotate(-45deg)' : 'none',
  };

  const middleBarStyle = {
    ...barCommonStyle,
    opacity: toggle ? 0 : 1,
    top: '50%',
    transition: 'opacity 0.2s ease-out',
  };

  const bottomBarStyle = {
    ...barCommonStyle,
    top: toggle ? '50%' : '15px',
    transform: toggle ? 'rotate(45deg)' : 'none',
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <motion.p 
            className='text-white text-[18px] font-bold cursor-pointer flex items-center'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span 
              className='block' 
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "26px",
                background: "linear-gradient(90deg, #915EFF, #00BFFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }} 
            >
              {"</"}Sunny Patel{">"}
            </span>
          </motion.p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <motion.li
              key={nav.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: nav.id * 0.1 }}
            >
              <a
                href={`#${nav.id}`}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-300`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/* Menu Icon Toggle */}
          <div style={menuIconStyle} onClick={() => setToggle(!toggle)}>
            <span style={topBarStyle}></span>
            <span style={middleBarStyle}></span>
            <span style={bottomBarStyle}></span>
          </div>

          {/* Menu Items */}
          <motion.div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: toggle ? 1 : 0, scale: toggle ? 1 : 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <motion.li
                  key={nav.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: nav.id * 0.1 }}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
