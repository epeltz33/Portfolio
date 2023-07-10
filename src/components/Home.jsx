import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-blue-500">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Eric Peltzman
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Hello! I'm a passionate Full-Stack Developer dedicated to crafting
          exceptional digital experiences. With a knack for creating responsive
          and user-friendly web applications, I'm always ready to tackle complex
          problems with innovative solutions. As a continuous learner, I'm
          constantly expanding my skill set and staying abreast of the latest
          industry trends. Now, I'm seeking an entry-level developer role where
          I can apply my technical skills and contribute to a dynamic team.
        </p>
        <div>
          <Link to="workSection" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-500 hover:border-blue-500">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
