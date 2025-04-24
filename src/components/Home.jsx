import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import HeroImage from "../assets/HeroImg.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className="h-full w-full bg-gradient-to-b from-black to-gray-800 pt-20 md:pt-24"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:px-10 lg:px-16 md:flex-row">
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full md:order-1">
          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-bold text-white text-center md:text-left leading-snug md:leading-tight order-1 md:order-none mt-6 sm:mt-10">
            Aspiring Software Developer
          </h2>

          {/* Portfolio Button */}
          <div className="flex justify-center md:justify-start order-3 md:order-none mt-4 md:mt-0">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer shadow-lg transform hover:scale-105 duration-300"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={22} className="ml-1" />
              </span>
            </Link>
          </div>

          {/* Bio (shown below button only on small devices) */}
          <p className="text-gray-400 py-4 max-w-md text-center md:text-left leading-relaxed hidden md:block order-2">
          Aspiring Software Developer with strong problem-solving skills, demonstrated by solving over 350 LeetCode problems and earning 5⭐️ in Java and MySQL on HackerRank. Proficient in building full-stack applications using technologies like Java, Spring Boot, React.js, HTML, CSS, Tailwind CSS, JavaScript, Python, Flask, MySQL, and MongoDB. Passionate about writing clean, scalable code and continuously learning new tools and frameworks. Eager to contribute to impactful projects and grow in a collaborative, fast-paced development environment.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-6 md:mt-0 md:order-2">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 sm:w-2/3 md:w-2/3 lg:w-full shadow-md"
          />
        </div>

        {/* Bio (visible below image on small devices) */}
        <p className="text-gray-400 py-4 max-w-md text-center leading-relaxed block md:hidden order-4">
          Aspiring Software Developer with strong problem-solving skills, demonstrated by solving over 350 LeetCode problems and earning 5⭐️ in Java and MySQL on HackerRank. Proficient in building full-stack applications using technologies like Java, Spring Boot, React.js, HTML, CSS, Tailwind CSS, JavaScript, Python, Flask, MySQL, and MongoDB. Passionate about writing clean, scalable code and continuously learning new tools and frameworks. Eager to contribute to impactful projects and grow in a collaborative, fast-paced development environment.
        </p>
      </div>
    </div>
  );
};

export default Home;
