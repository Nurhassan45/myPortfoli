import React from "react";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaFire,
  FaTools,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiC, SiCplusplus, SiExpress } from "react-icons/si";

const skills = {
  Frontend: [
    { name: "React", icon: <FaReact />, level: 90 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
    { name: "JavaScript", icon: <FaJs />, level: 80 },
    { name: "HTML", icon: <FaHtml5 />, level: 95 },
    { name: "CSS", icon: <FaCss3Alt />, level: 90 },
  ],
  Backend: [
    { name: "Firebase", icon: <FaFire />, level: 75 },
    { name: "Node.js", icon: <FaNodeJs />, level: 70 },
    { name: "Express.js", icon: <SiExpress />, level: 65 },
    { name: "MongoDB", icon: <FaDatabase />, level: 70 },
  ],
  Tools: [
    { name: "C", icon: <SiC />, level: 70 },
    { name: "C++", icon: <SiCplusplus />, level: 65 },
  ],
};

const Skills = () => {
  return (
    <section id="Skill" className="bg-white px-6 md:px-20 py-24">
      <h2 className="text-4xl font-extrabold text-blue-600 text-center mb-12">
        My Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold text-blue-500 mb-6 flex items-center gap-2">
              <FaTools /> {category}
            </h3>
            <div className="space-y-6">
              {skillList.map(({ name, icon, level }) => (
                <div key={name}>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-3 text-gray-800 font-medium">
                      <span className="text-xl text-blue-600">{icon}</span>
                      {name}
                    </div>
                    <span className="text-sm text-gray-600">{level}%</span>
                  </div>
                  <div className="w-full bg-blue-100 h-2 rounded-full">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-700"
                      style={{ width: `${level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
