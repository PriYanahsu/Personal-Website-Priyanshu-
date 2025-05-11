import React from "react";
import css from "../assets/css.png";
import flask from "../assets/flask.jpg";
import html from "../assets/html.png";
import java from "../assets/java.jpg";
import javascript from "../assets/javascript.png";
import mysql from "../assets/mySQL.jpg";
import python from "../assets/python.jpg";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import spring from "../assets/spring.png";
import mongo from "../assets/mongoDB.jpeg";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: python,
      title: "Python",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: tailwind,
      title: "TailWind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: java,
      title: "Java",
      style: "shadow-orange-500",
    },
    {
      id: 8,
      src: mysql,
      title: "MySQL",
      style: "shadow-yellow-500",
    },
    {
      id: 9,
      src: flask,
      title: "Flask",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: spring,
      title: "Spring-boot",
      style: "shadow-green-500",
    },
{
      id: 11,
      src: mongo,
      title: "mongoDB",
      style: "shadow-green-800",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-auto pt-12 md:pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center md:text-left pb-8">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6 text-base sm:text-lg md:text-xl">
            These are technologies I'm skilled with
          </p>
        </div>

        {/* Grid for skills */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-90 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 text-sm sm:text-base md:text-lg">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
