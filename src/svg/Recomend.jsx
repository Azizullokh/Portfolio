import React from "react";
import useLanguageStore from "../store/languageStore";

function Recomend() {
  const { translation } = useLanguageStore();
  return (
    <a
      href="https://linkedin.com/in/azizullokh-abdumannopov/recommendation"
      target="_blank"
      rel="noopener noreferrer"
      className="md:px-5 md:py-3 px-1 py-2 md:text-[16px] w-full text-[10px] bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-700 transition-all duration-300 active:scale-95"
    >
      {translation.recomend}
    </a>
  );
}

export default Recomend;
