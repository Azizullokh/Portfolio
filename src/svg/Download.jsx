import React from "react";

function Download() {
  return (
    <a
      href="/cv.pdf.pdf"
      download="Azizulloh_Resume.pdf"
      className="flex items-center px-1 py-2 md:px-5 md:py-3 text-[9px] w-full md:text-[16px] bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 active:scale-95"
    >
      📄 Download CV
    </a>
  );
}

export default Download;
