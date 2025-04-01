import React from "react";
import useLanguageStore from "../store/languageStore";

function Download() {
  const { translation } = useLanguageStore();
  return (
    <a
      href="/cvv.pdf"
      download="Azizulloh_Resume.pdf"
      className="flex items-center px-1 py-2 md:px-5 md:py-3 text-[9px] w-full md:text-[16px] bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 active:scale-95"
    >
      {translation.download}
    </a>
  );
}

export default Download;
