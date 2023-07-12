import React from "react";

const Work = () => {
  return (
    <div
      id="workSection"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-500">
            Work
          </p>
          <p className="py-6"> Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div className="bg-[#1e293b] rounded-lg p-4 flex flex-col justify-between">
            <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-full bg-[#1e293b]">
              {/* Hover Effects */}
              <div className="opacity-50 group-hover:opacity-100 transition-opacity duration-200 h-full flex flex-col justify-center items-center">
                <span className="text-xl font-bold text-white tracking-wider text-center">
                  Command Line Hangman
                </span>
                <div className="pt-8 text-center">
                  <a href="https://portfolio-epeltz33.vercel.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#1e293b] text-white font-bold text-lg border border-white">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/epeltz33/Hangman.git">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#1e293b] text-white font-bold text-lg border border-white">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
