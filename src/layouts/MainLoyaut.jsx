import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import DarkModeToggle from "../components/darkmode";
import { motion } from "framer-motion";
function MainLoyaut({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <div className="transition-all duration-300 ease-in-out">
      <header className="dark:bg-gray-900 bg-white p-4 shadow-md fixed w-full top-0 left-0 z-50">
        <div className="container mx-auto justify-between px-4 flex md:flex-row items-center gap-[5px] md:gap-6 w-full max-w-[1200px]">
          <h1 className="text-2xl font-bold text-green-600">Azizullokh</h1>
          <nav className="hidden md:flex space-x-6 font-bold">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item, index) => {
                const path = `/${item.toLowerCase()}`;
                const isActive = location.pathname === path;
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative"
                  >
                    <Link
                      to={path}
                      className={`dark:text-white hover:text-green-500 transition-all duration-300
                ${isActive ? "text-green-500" : "text-gray-700"}
              `}
                    >
                      {item}
                    </Link>
                    <motion.div
                      className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-green-500"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{
                        scaleX: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                );
              }
            )}
          </nav>
          <div className="flex items-center space-x-4">
            <DarkModeToggle></DarkModeToggle>
            <button
              className="md:hidden text-2xl text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: isOpen ? 0 : "100%", opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className={`md:hidden fixed top-0 right-0 w-[60%] bg-white dark:bg-gray-900 shadow-lg z-50 
        flex flex-col items-center pt-20 space-y-6 transition-all duration-300`}
        >
          <button
            className="absolute top-5 right-8 text-3xl text-gray-700 dark:text-white hover:text-red-500 transition-all z-50"
            onClick={() => setIsOpen(false)}
          >
            <FiX />
          </button>
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center space-y-6 pb-[30px]"
          >
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 dark:text-white hover:text-green-500 text-lg font-semibold"
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </header>
      <main className="mt-[80px]">{children}</main>
      <footer></footer>
    </div>
  );
}

export default MainLoyaut;
