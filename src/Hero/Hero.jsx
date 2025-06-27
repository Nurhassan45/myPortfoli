import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative mb-[50px] md:mb-[80px] bg-white px-6 md:px-16 pt-24 pb-10 overflow-hidden">
      {/* 🔷 Top Right Decorative Shape */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-100 rounded-bl-[100%] hidden md:block z-0"></div>

      {/* 🔷 Main Grid Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        {/* LEFT: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Hey, I’m a <span className="text-blue-600">digital</span><br />
            Web Developer.
          </h1>
          <p className="mt-4 text-gray-600 text-base max-w-md mx-auto md:mx-0">
            Hi, I’m <strong>Nur Hassan Rabbi</strong> — a web developer from Bangladesh.
            I help brands turn their ideas into high quality products.
          </p>

          {/* Social Icons Below Description */}
          <div className="mt-6 flex justify-center md:justify-start space-x-5 text-gray-600">
            <a
              href="https://www.linkedin.com/in/nur-hassan-rabbi-74a574351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://github.com/Nurhassan45"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* RIGHT: Image in Blue Circle */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-blue-100 shadow-inner flex items-end justify-center overflow-hidden">
            <img
              src="https://i.ibb.co/ycWrBJDY/image.png"
              alt="Nur Hassan Rabbi"
              className="w-[90%] object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
