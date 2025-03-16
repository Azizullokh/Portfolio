import React from "react";
import { motion } from "framer-motion";
import useLanguageStore from "../store/languageStore";

function Skills() {
  const { translation } = useLanguageStore();
  return (
    <section className="transition-all duration-300 bg-gray-200 p-8 w-full h-full min-h-screen dark:bg-black">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-3xl dark:text-white font-bold text-center mb-6"
      >
        {translation.myskills}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-3 dark:bg-gray-900 flex-col shadow-lg bg-white items-start rounded-lg p-[20px]"
        >
          <h3 className="text-green-500 font-bold">
            🖥️ {translation.Technologies}
          </h3>
          <div className="flex flex-wrap gap-3 mt-2 items-start">
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              React.js
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              HTML5
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              SASS/SCSS
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              CSS3
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex dark:bg-gray-900 bg-white gap-3 flex-col shadow-lg items-start rounded-lg p-[20px]"
        >
          <h3 className="text-green-500 font-bold">🌐 {translation.wwa}</h3>
          <div className="flex flex-wrap gap-3 mt-2 items-start">
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              RESTful API
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              Fetch API and Axios
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              React Query
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-3 dark:bg-gray-900 bg-white flex-col shadow-lg items-start rounded-lg p-[20px]"
        >
          <h3 className="text-green-500 font-bold">🛠️ {translation.tools}</h3>
          <div className="flex flex-wrap gap-3 mt-2 items-start">
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              Git
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              GitHub
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              Figma
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              Vercel
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              Netlify
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-3 bg-white dark:bg-gray-900 flex-col shadow-lg items-start rounded-lg p-[20px]"
        >
          <h3 className="text-green-500 font-bold">📱 {translation.RD}</h3>
          <div className="flex flex-wrap gap-3 mt-2 items-start">
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              Media Queries
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              Mobile-First Development
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-3 bg-white dark:bg-gray-900 flex-col shadow-lg items-start rounded-lg p-[20px]"
        >
          <h3 className="text-green-500 font-bold">🔄 {translation.state}</h3>
          <div className="flex flex-wrap gap-3 mt-2 items-start">
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              Redux Toolkit
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              Zustand
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              React Context API
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-3 bg-white dark:bg-gray-900 flex-col shadow-lg items-start rounded-lg p-[20px]"
        >
          <h3 className="text-green-500 font-bold">🌟 {translation.soft}</h3>
          <div className="flex flex-wrap gap-3 mt-2 items-start">
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              Solving problems
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              teamwork
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md">
              self-development
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
