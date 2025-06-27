import React from "react";
import { Link } from "react-router";

const projects = [
  {
    id: 1,
    name: "Parcel Delivery App",
    image: "https://i.ibb.co/1J9C2ZtS/image.png",
    desc: "A web app to book, read, and manage read and write ",
  },
  {
    id: 2,
    name: "HubbyHub",
    image: "https://i.ibb.co/35f22kBy/image.png",
    desc: "Frontend for HobbyHub – a React + Firebase app for discovering, joining, and managing local hobby groups and events..",
  },
  {
    id: 3,
    name: "Pay Bill",
    image: "https://i.ibb.co/bMx7zHbd/image.png",
    desc: " A React frontend for managing online payments, tracking bill status, and admin controls with Firebase Auth and Firestore.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white px-4 md:px-16 py-24">
      <h2 className="text-4xl  font-extrabold text-blue-600 text-center mb-16">My Projects</h2>

      <div className="space-y-20 max-w-6xl mx-auto">
        {projects.map(({ id, name, image, desc }, index) => (
          <div
            key={id}
            className={`relative w-full flex flex-col-reverse md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 md:p-10 shadow-lg hover:shadow-blue-300 transition-all`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4 relative">
              {/* Decorative Skew Label */}
              <div className="absolute -top-7 mb-4 left-0 bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-1 rounded-r-full transform -skew-x-12 shadow-lg">
                <span className="text-white font-bold tracking-wider text-sm">
                  #{index + 1} Project
                </span>
              </div>

              <h3 className="text-3xl font-bold text-gray-800">{name}</h3>
              <p className="text-gray-600">{desc}</p>
              <Link to={`/projects/${id}`}>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
