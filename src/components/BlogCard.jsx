import React from "react";


const BlogCard = ({ title, description, date, onClick }) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg hover:shadow- transition duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{date}</p>
      <p className="text-gray-300 mb-4">{description}</p>
      <button
        onClick={() => onClick}
        className="text-sm bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-md hover:scale-105 transition"
      >
        Read More
      </button>
    </div>
  );
};

export default BlogCard;
