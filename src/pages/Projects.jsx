import React from "react";
import { motion } from "framer-motion";
import comfystore from "../ProjectsImage/comfystore.png";
import cryptofolio from "../ProjectsImage/cryptofolio.png";
import wordsearch from "../ProjectsImage/wordsearch.png";
import loginregister from "../ProjectsImage/login-register.png";
import myprofile from "../ProjectsImage/my-profile.png";
import pizzalayout from "../ProjectsImage/pizza-layout.png";
import girllayout from "../ProjectsImage/girl-layout.png";
import todolist from "../ProjectsImage/todolist.png";
import moviesearch from "../ProjectsImage/movie-search.png";
import pomodoro from "../ProjectsImage/pomodoro.png";
import uzlayout from "../ProjectsImage/uz-layout.png";
import githubusers from "../ProjectsImage/github-users.png";

const ProjectsNew = [
  {
    id: 1,
    image: comfystore,
    link: "https://comfy-store77.vercel.app/",
    name: "Comfy Store",
    description: "Store created using React and Tailwind CSS",
    technologies: ["React.js", "Tailwind css", "REST API"],
    responsive: false,
    style: "🟠",
  },
  {
    id: 2,
    image: cryptofolio,
    link: "https://crypto-folio-gamma.vercel.app/",
    name: "CryptoFolio",
    description: "A site to track cryptocurrency prices.",
    technologies: ["React.js", "REST API", "Chart.js"],
    responsive: false,
    style: "🟢",
  },
  {
    id: 3,
    image: wordsearch,
    link: "https://calm-begonia-aa5a26.netlify.app/",
    name: "Word search",
    description: "An app to look up words and find their meaning.",
    technologies: ["JS", "REST API", "+AUDIO"],
    responsive: true,
    style: "🟢",
  },
  {
    id: 4,
    image: loginregister,
    link: "https://react-7-e9sg.vercel.app/",
    name: "Login-Signup",
    description: "A site where users can register and log in.",
    technologies: ["React.js", "REST API"],
    responsive: true,
    style: "🟠",
  },
  {
    id: 5,
    image: myprofile,
    link: "https://old-profile-rust.vercel.app/",
    name: "My Profile",
    description:
      "A site about my personal profile, experience and skills. (not realy)",
    technologies: ["JS", "CSS"],
    responsive: true,
    style: "🟢",
  },
  {
    id: 6,
    image: pizzalayout,
    link: "https://old-project-kuda-pizza.vercel.app/",
    name: "Kuda Pizza",
    description:
      "A simple pizza restaurant website layout built with HTML and CSS.",
    technologies: ["HTML", "CSS"],
    responsive: false,
    style: "🟢",
  },
  {
    id: 7,
    image: girllayout,
    link: "https://old-project-beta.vercel.app/",
    technologies: ["HTML", "CSS"],
    name: "Practice layout",
    description:
      "A stylish practice layout with a modern UI using only HTML and CSS.",
    responsive: true,
    style: "🟢",
  },
  {
    id: 8,
    image: todolist,
    link: "https://todo-list-delta-mocha-61.vercel.app/",
    technologies: ["JS", "CSS"],
    description: "A simple ToDo list application for managing daily tasks.",
    name: "ToDo List",
    responsive: false,
    style: "🟠",
  },
  {
    id: 9,
    image: moviesearch,
    link: "https://movie-search-1sr1.vercel.app/",
    technologies: ["JS", "CSS", "REST API"],
    name: "Movie search",
    description: "A movie search app that fetches data from a REST API.",
    responsive: true,
    style: "🔴",
  },
  {
    id: 10,
    image: pomodoro,
    link: "https://react-13-woad.vercel.app/",
    technologies: ["React.js", "Tailwind CSS"],
    name: "Timer",
    description: "A Pomodoro timer app to boost productivity using React.",
    responsive: false,
    style: "🟠",
  },
  {
    id: 11,
    image: uzlayout,
    link: "https://react-23-lovat.vercel.app/",
    technologies: ["React", "Tailwind CSS", "Chart.js"],
    name: "Practice layout",
    description:
      "A data visualization layout using React, Tailwind CSS, and Chart.js.",
    responsive: false,
    style: "🟢",
  },
  {
    id: 12,
    image: githubusers,
    link: "https://search-for-github-users-nu.vercel.app/",
    technologies: ["JS", "CSS", "REST API"],
    name: "GitHub Users search",
    responsive: false,
    description:
      "An app that allows users to search for GitHub profiles using the GitHub API.",
    style: "🔴",
  },
];
function Projects() {
  return (
    <div className="bg-gray-200 dark:bg-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-white mb-8">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[35px] md:w-[85%] mx-auto">
          {ProjectsNew.length > 0 &&
            ProjectsNew.map((project) => {
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                >
                  <img
                    className="w-full h-48 object-cover"
                    src={project.image}
                    alt=""
                  />
                  <div className="p-5 flex flex-col h-full">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {project.name}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {project.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-500 text-white text-sm rounded-md transition-all duration-300 hover:bg-blue-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-[14px] text-lg font-semibold text-gray-700 dark:text-gray-300">
                      Style: {project.style}
                    </div>
                    <div className="mt-4 flex items-center gap-[1px] justify-between">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
                      >
                        Live Demo
                      </a>
                      <span
                        className={`px-2 py-1 rounded-full text-white text-sm transition-all duration-300 ${
                          project.responsive
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-red-500 hover:bg-red-600"
                        }`}
                      >
                        {project.responsive ? "Responsive" : "Not Responsive"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
