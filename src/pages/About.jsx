import React from "react";
import { motion } from "framer-motion";
import useLanguageStore from "../store/languageStore";
const About = () => {
  const { translation } = useLanguageStore();
  return (
    <section className="min-h-screen bg-gray-200 flex flex-col items-center p-8 dark:bg-black">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-6"
      >
        {translation.about}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-gray-600 dark:text-gray-300 text-center max-w-2xl"
      >
        {translation.about2}
      </motion.p>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-green-500 font-bold text-lg">
            🎓 {translation.education}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            {translation.ihbl}
          </p>
          <div className="mt-4"></div>
          <p className="mb-4 dark:text-white">
            {translation.month}
            <span className="text-blue-500 font-bold">React.js</span>,{" "}
            <span className="text-yellow-500 font-bold">JavaScript</span>,{" "}
            <span className="text-purple-500 font-bold">TypeScript</span>, and{" "}
            <span className="text-cyan-500 font-bold">Tailwind CSS</span>.
          </p>
          <h3 className="text-2xl text-green-500 font-bold mt-6">
            {translation.key}
          </h3>
          <ul className="list-disc list-inside mb-4 dark:text-white">
            <li>React.js & Component-based Architecture</li>
            <li>API Integration & Data Fetching</li>
            <li>TypeScript for scalable applications</li>
            <li>Responsive UI & Tailwind CSS</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-green-500 font-bold text-lg">💼 Experience</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            {translation.ihwo}
          </p>
          <ul className="list-disc list-inside mb-4 dark:text-white">
            <li>
              🌐 <span className="font-bold">Personal Portfolio</span> -{" "}
              {translation.Personal}
            </li>
            <li>
              🛍️ <span className="font-bold">E-commerce UI</span> -{" "}
              {translation.commerce}
            </li>
            <li>
              📅 <span className="font-bold">Task Manager App</span> -{" "}
              {translation.Taskmanager}
            </li>
          </ul>
          <h3 className="text-2xl text-green-500 font-bold mt-6">
            {translation.Frontend}
          </h3>
          <p className="mb-4 dark:text-white">
            {translation.ihb}{" "}
            <span className="text-blue-500 font-bold">React.js</span> and{" "}
            <span className="text-blue-500 font-bold">Tailwind CSS</span>. I am
            also improving my{" "}
            <span className="text-yellow-500 font-bold">TypeScript</span>{" "}
            skills.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg mb-[40px] shadow-lg mt-10"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {translation.goal}
        </h3>
        <h3 className="text-2xl text-green-500 font-bold mt-6">
          {translation.Becoming}
        </h3>
        <p className="mb-4 dark:text-white">
          {translation.skilled}{" "}
          <span className="font-bold">Frontend Developer</span>, mastering{" "}
          <span className="text-blue-500 font-bold">React.js</span>,{" "}
          <span className="text-yellow-500 font-bold">TypeScript</span>, and{" "}
          <span className="text-cyan-500 font-bold">Next.js</span> to build
          {translation.scalable}
        </p>
        <h3 className="text-2xl text-green-500 font-bold mt-6">
          {translation.Career}
        </h3>
        <ul className="list-disc list-inside mb-4 dark:text-white">
          <li>{translation.Working}</li>
          <li>{translation.Building}</li>
          <li>{translation.Sharing}</li>
          <li>{translation.Contributing}</li>
        </ul>
        <h3 className="text-2xl text-green-500 font-bold mt-6">
          {translation.Learning}
        </h3>
        <ul className="list-disc list-inside mb-4 dark:text-white">
          <li>{translation.Mastering}</li>
          <li>{translation.Backend}</li>
          <li>{translation.Improving}</li>
          <li>{translation.Exploring}</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default About;
