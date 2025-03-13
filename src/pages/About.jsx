import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="min-h-screen bg-gray-200 flex flex-col items-center p-8 dark:bg-black">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-6"
      >
        About Me
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-gray-600 dark:text-gray-300 text-center max-w-2xl"
      >
        I'm a passionate Frontend Developer who loves crafting modern and
        scalable web applications.
      </motion.p>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-green-500 font-bold text-lg">🎓 Education</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            I have been learning Frontend Development with JavaScript and React.
          </p>
          <div className="mt-4"></div>
          <p className="mb-4 dark:text-white">
            I have completed <span className="font-bold">9 months</span> of
            learning frontend development, focusing on{" "}
            <span className="text-blue-500 font-bold">React.js</span>,{" "}
            <span className="text-yellow-500 font-bold">JavaScript</span>,{" "}
            <span className="text-purple-500 font-bold">TypeScript</span>, and{" "}
            <span className="text-cyan-500 font-bold">Tailwind CSS</span>.
          </p>
          <h3 className="text-2xl text-green-500 font-bold mt-6">
            Key Learnings
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
            I have worked on multiple web projects using modern technologies
            like React.js and Tailwind CSS.
          </p>
          <ul className="list-disc list-inside mb-4 dark:text-white">
            <li>
              🌐 <span className="font-bold">Personal Portfolio</span> - modern
              and responsive website
            </li>
            <li>
              🛍️ <span className="font-bold">E-commerce UI</span> - shopping
              platform prototype
            </li>
            <li>
              📅 <span className="font-bold">Task Manager App</span> - to-do
              list with React
            </li>
          </ul>
          <h3 className="text-2xl text-green-500 font-bold mt-6">
            Frontend Developer (9 months)
          </h3>
          <p className="mb-4 dark:text-white">
            I have built multiple projects using{" "}
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
          My Goal
        </h3>
        <h3 className="text-2xl text-green-500 font-bold mt-6">
          Becoming a Professional Frontend Developer
        </h3>
        <p className="mb-4 dark:text-white">
          My goal is to become a highly skilled{" "}
          <span className="font-bold">Frontend Developer</span>, mastering{" "}
          <span className="text-blue-500 font-bold">React.js</span>,{" "}
          <span className="text-yellow-500 font-bold">TypeScript</span>, and{" "}
          <span className="text-cyan-500 font-bold">Next.js</span> to build
          scalable and high-performance web applications.
        </p>
        <h3 className="text-2xl text-green-500 font-bold mt-6">
          Career & Future Goals
        </h3>
        <ul className="list-disc list-inside mb-4 dark:text-white">
          <li>
            Working in a **top-tier tech company** as a Frontend Developer
          </li>
          <li>Building **real-world projects** to strengthen my portfolio</li>
          <li>Sharing knowledge through **blogs and tutorials**</li>
          <li>
            Contributing to **open-source projects** and collaborating with
            developers worldwide
          </li>
        </ul>
        <h3 className="text-2xl text-green-500 font-bold mt-6">
          Learning & Growth
        </h3>
        <ul className="list-disc list-inside mb-4 dark:text-white">
          <li>Mastering **React.js & Next.js** for advanced web development</li>
          <li>
            Learning **Backend (Node.js & Express)** to become a Full-stack
            developer
          </li>
          <li>
            Improving **Problem Solving & Algorithms** for better coding
            efficiency
          </li>
          <li>
            Exploring **Database (MongoDB, PostgreSQL)** for full-stack
            expertise
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default About;
