import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-auto bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col justify-center items-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 text-base sm:text-lg md:text-xl">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center w-full">
          <form
            action="https://formsubmit.co/el/fadawe"
            method="POST"
            className="flex flex-col w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4 text-sm sm:text-base"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4 text-sm sm:text-base"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="6"
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4 text-sm sm:text-base"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300 text-sm sm:text-base">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
