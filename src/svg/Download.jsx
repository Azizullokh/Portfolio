import React from "react";

function Download() {
  return (
    <a
      href="/cv.pdf"
      download="Aziz_CV.pdf"
      className="flex items-center px-2 py-1 md:px-5 md:py-3 text-[7px] w-full md:text-[16px] bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 active:scale-95"
    >
      📄 Download CV
    </a>
  );
}

export default Download;
