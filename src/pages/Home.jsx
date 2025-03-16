import React from "react";
import azizullokh from "../images/azizullokh-abdumannopov.jpg";
import GithubSVG from "../svg/GithubSVG";
import LinkedinSVG from "../svg/LinkedinSVG";
import TelegramSVG from "../svg/TelegramSVG";
import InstagramSVG from "../svg/InstagramSVG";
import { useNavigate } from "react-router-dom";
import Download from "../svg/Download";
import Recomend from "../svg/Recomend";
import { motion } from "framer-motion";
import useLanguageStore from "../store/languageStore";
function Home() {
  const navigate = useNavigate();
  const { translation } = useLanguageStore();
  function handlenavigate() {
    navigate("/contact");
    setIsOpen(false);
  }
  return (
    <section className="transition-all duration-200 flex flex-col items-center justify-center w-full h-full bg-gray-200 pt-[1px] dark:bg-black md:pt-10">
      <div className="home min-h-screen flex flex-col md:flex-row items-start gap-[0px] w-full max-w-[1200px]">
        <div className="flex items-start gap-[10px] ">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="dark:bg-gray-900 flex md:w-[100%] flex-col bg-white shadow-2xl rounded-lg p-[10px] mt-[-7px] md:mt-[10px] ml-[10px] md:p-8 text-center items-center"
          >
            <div className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] flex md:p-[0px] p-[0px] rounded-full lg:h-[280px] lg:w-[280px] dark:border-white items-center border-2 border-green-500">
              <img
                src={azizullokh}
                alt="Aziz"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h2 className="text-[13px] sm:text-[14px] md:text-2xl font-semibold dark:text-white mt-4">
              {translation.name}
            </h2>
            <p className="text-[10px] md:text-[17px] text-gray-600 dark:text-gray-400">
              {translation.who}
            </p>
            <div className="flex justify-center space-x-3 sm:space-x-4 md:space-x-4 mt-3">
              <a
                className="p-[5px] dark:border-white border-[1px] rounded-[6px] hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-90"
                href="https://github.com/Azizullokh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubSVG></GithubSVG>
              </a>
              <a
                className="p-[5px] dark:border-white border-[1px] rounded-[6px] hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-90"
                href="https://www.linkedin.com/in/azizullokh-abdumannopov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinSVG></LinkedinSVG>
              </a>
              <a
                className="p-[5px] dark:border-white border-[1px] rounded-[6px] hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-90"
                href="https://t.me/Frontend_developmentt"
              >
                <TelegramSVG></TelegramSVG>
              </a>
              <a
                className="p-[5px] dark:border-white border-[1px] rounded-[6px] hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-90"
                href="https://www.instagram.com/azizullokh_7?igsh=MTJnNDhmdHRuNzVmYQ%3D%3D&utm_source=qr"
              >
                <InstagramSVG></InstagramSVG>
              </a>
            </div>
          </motion.div>
          <div className="md:hidden">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:hidden mr-[10px] p-[10px] md:mr-[0px] bg-white dark:bg-gray-900 max-w-[calc(100%-10px)] mt-[-7px] flex flex-col gap-3 items-center shadow-2xl rounded-lg"
            >
              <Download></Download>
              <button
                className="px-1 py-2 text-start text-[10px] bg-green-600 cursor-pointer w-full md:text-[16px] text-white rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 active:scale-95"
                onClick={handlenavigate}
              >
                {translation.hire}
              </button>
              <Recomend></Recomend>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col mr-[10px] h-[72px] items-stretch gap-0 mt-[10px] shadow-2xl rounded-lg p-[10px] bg-white dark:bg-gray-900"
            >
              <p className="text-center text-gray-500 italic text-[10px]">
                "{translation.quote}"
              </p>
            </motion.div>
          </div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center w-full md:max-w-[900px] md:mt-0"
          >
            <div className="bg-white dark:bg-gray-900 md:p-8 shadow-2xl rounded-lg w-full p-[10px] m-[10px]">
              <h3 className="text-[16px] md:text-lg text-gray-500 mb-[10px] md:mb-[30px] dark:text-white">
                {translation.greeting}!
              </h3>
              <h1 className="text-[15px] md:text-4xl font-bold w-full dark:text-white">
                {translation.i}{" "}
                <span className="text-green-600">
                  {translation.introduction}
                </span>
                {translation.job}{" "}
                <span className="text-gray-600">{translation.user} </span>
                {translation.pixel}
              </h1>
              <div className="text-[15px] md:text-[20px] flex flex-col gap-3 mt-5 text-green-600">
                <span>{translation.skill1}</span>
                <span>{translation.skill2}</span>
                <span>{translation.skill3}</span>
              </div>
            </div>
          </motion.div>
          <div className="hidden md:flex items-center w-full md:max-w-[900px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center bg-white gap-[25px] mr-[10px] dark:bg-gray-900 md:p-8 shadow-2xl rounded-lg w-full p-[10px] ml-[10px]"
            >
              <Download></Download>
              <button
                className="md:px-5 md:py-3 px-2 py-1 w-full bg-green-600 cursor-pointer text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 active:scale-95"
                onClick={handlenavigate}
              >
                {translation.hire}
              </button>
              <Recomend></Recomend>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
