import React from "react";
import BlogCard from "../components/BlogCard";

const blogs = [
  {
    id: "1",
    title: "Getting Started with Spring Boot",
    description: "Spring Boot is a Java-based framework that makes it easy to build RESTful backend applications. In this blog, I’ll walk you through how to create a simple Spring Boot project, connect it with MySQL, and build basic CRUD APIs.",
    date: "Dec 12, 2024",
    link: ""
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    description: "Hooks in React allow you to use state and lifecycle features in functional components. In this blog, I’ll explain how to use useState, useEffect, useRef, and also how to create custom hooks with simple examples for each.",
    date: "Sept 19, 2024",
    link: ""
  },
  {
    id: 3,
    title: "My Journey: Solving 400+ LeetCode Problems",
    description: "In this blog, I share how I stayed consistent with daily DSA practice, the resources I used, and the patterns I focused on. I also talk about the impact this journey had on my coding skills and interview preparation.",
    date: "June 25, 2025",
    link: ""
  },
];

const Blog = () => {
  return (
    <div name="blogs" className="min-h-screen bg-gradient-to-b from-black to-gray-800 text-white py-20 px-6">
      <div className="max-w-screen-lg mx-auto text-center md:text-left">
        <h2 className="text-4xl font-bold mb-10 border-b-4 border-gray-500 p-2 inline">
          My Blogs
        </h2>
        <p className="py-6 text-base sm:text-lg md:text-xl">Check out my Blogs</p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8 text-left">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              link={blog.link}
              onClick={() => alert(`Redirect to full blog ${blog.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
