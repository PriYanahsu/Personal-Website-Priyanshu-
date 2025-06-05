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
          As an MCA student with a solid foundation in computer science and programming, I specialize in designing and developing responsive, user-friendly websites and full-stack applications. I’m proficient in a wide range of technologies including HTML, CSS, Tailwind CSS, JavaScript, React.js, Java, Spring Boot, Python, Flask, MySQL, and MongoDB. My focus is on delivering scalable and efficient solutions that perform seamlessly across all devices.
        </p>
        <br />

        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-center md:text-left">
          I have demonstrated strong problem-solving and analytical skills by solving over 400 problems on LeetCode and earning 5⭐ ratings in Java and MySQL on HackerRank. Eager to apply my academic knowledge and project experience, I’m passionate about contributing to dynamic IT teams, continuously learning new technologies, and building impactful software solutions.
        </p>

      </div>
    </div>
  );
};

export default About;
