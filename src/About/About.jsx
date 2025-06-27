import React from "react";
import { FaFootballBall, FaCode, FaLightbulb, FaSmile } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 px-6 md:px-20 overflow-hidden">
      {/* Skewed background accent */}
      <div
        className="absolute inset-0 bg-blue-100/30 -skew-y-6 origin-top-left pointer-events-none -z-10"
        style={{ transformOrigin: "top left" }}
      ></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 relative">
        {/* Left column with giant number */}
        <div className="relative flex flex-col justify-center">
          {/* Giant translucent number behind */}
          <span className="absolute -top-20 -left-12 text-[12rem] font-extrabold text-blue-100 select-none pointer-events-none opacity-10 leading-none">
            01
          </span>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            About <span className="text-gray-900">Me</span>
          </h2>

          <p className="text-lg md:text-xl max-w-xl text-gray-800 leading-relaxed mb-6">
            I’m{" "}
            <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Nur Hassan Rabbi
            </span>
            , a passionate web developer and BSc CSE student. My Muslim faith inspires me to approach both life and technology with humility and dedication.
          </p>

          <p className="text-gray-700 max-w-xl text-lg leading-relaxed">
            My programming journey began with curiosity, blossoming into a love for crafting seamless and engaging web experiences that solve real problems.
          </p>
        </div>

        {/* Right column: glassmorphic card container */}
        <div className="backdrop-blur-sm bg-white/40 rounded-3xl p-10 shadow-xl border border-white/30 flex flex-col gap-8">
          {[
            {
              icon: <FaCode />,
              title: "Programming Journey",
              desc:
                "Started with curiosity, now I create clean, user-friendly websites that make an impact.",
            },
            {
              icon: <FaLightbulb />,
              title: "Work I Enjoy",
              desc:
                "Building modern JavaScript apps, APIs, and crafting smooth user experiences.",
            },
            {
              icon: <FaFootballBall />,
              title: "Hobbies & Interests",
              desc:
                "Playing football ⚽️, sketching, and reading tech and personal growth books.",
            },
            {
              icon: <FaSmile />,
              title: "Personality",
              desc:
                "I see programming as storytelling through code — always learning, collaborating, and evolving.",
            },
          ].map(({ icon, title, desc }, i) => (
          <div
  key={i}
  className="flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-white/60 border border-white/40 shadow-md
             hover:scale-[1.05] hover:shadow-cyan-400/50 transition-transform duration-300 cursor-pointer"
>
  <div className="text-4xl text-blue-600">{icon}</div>
  <div>
    <h3 className="text-xl font-semibold text-blue-700 mb-1">{title}</h3>
    <p className="text-gray-700">{desc}</p>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
