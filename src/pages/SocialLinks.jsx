import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/priyanshukumar1265/",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/PriYanahsu",
      style: "shadow-gray-600",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:priyanshu1265656@gmail.com",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: 'https://olive-zsazsa-51.tiiny.site',
      style: "shadow-red-400",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          LeetCode <SiLeetcode size={30} />
        </>
      ),
      href: "https://leetcode.com/u/PriyAnshu1265/",
      style: "shadow-orange-600",
    },
    {
      id: 6,
      child: (
        <>
          HackerRank <SiHackerrank size={30} />
        </>
      ),
      href: "https://www.hackerrank.com/profile/priyanshukuma120",
      style: "shadow-green-600",
    },
  ];

  return (
    <div
      name="social-links"
      className="bg-gradient-to-b from-gray-800 to-black w-full py-12 md:py-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center md:text-left pb-8">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold border-b-4 border-gray-500 p-2 inline">
            Social Links
          </p>
          <p className="py-6 text-base sm:text-lg md:text-xl">
            Connect with me through these platforms
          </p>
        </div>

        {/* Grid for social links */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0">
          {links.map(({ id, child, href, style, download }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              <a
                href={href}
                className="flex justify-center items-center text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
