import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white pt-12 md:pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Heading */}
        <div className="pb-4 text-center md:text-left">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        {/* Text Section */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-6 md:mt-12 text-center md:text-left">
          As an MCA student with a strong foundation in computer science and
          programming, I am skilled in designing and developing websites using
          technologies such as HTML, CSS, JavaScript, React, Java, and Python. I
          focus on creating user-friendly, responsive websites that meet both
          client and user needs, ensuring they perform well across different
          devices.
        </p>
        <br />

        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-center md:text-left">
          In addition, I have a proven track record in problem-solving, having
          solved questions on LeetCode, which showcases my strong
          algorithmic thinking and analytical abilities. Eager to apply my academic
          knowledge and project experience, I am passionate about contributing
          effectively to dynamic IT teams.
        </p>
      </div>
    </div>
  );
};

export default About;
