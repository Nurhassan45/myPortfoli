import React from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";

const projectData = {
  1: {
    name: "Bookshelf",
        tech: ["React", "Firebase", "React Router", "Tailwind", "Vite", "Framer Motion"],

    description: "A web app to book, read, and manage read and write .",
    live: "https://assignment11-56c4f.web.app ",
    github: "https://github.com/Nurhassan45/BookShlef/tree/main",
    challenges: "User authentication and conditional UI flow were tricky to implement.",
    improvements: "Add Book, Upvote , and read Book app.",
    accent: "bg-blue-100 border-blue-200 text-blue-800"
  },
  2: {
    name: "HubbyHub",
    tech: ["React", "Firebase", "React Router", "Tailwind", "Vite", "Framer Motion"],
    description: "HobbyHub connects people through shared hobbies. Whether you're into photography, hiking, gaming, or crafting — HobbyHub makes it easy to build communities.",
    live: "https://assignment10-aa06d.web.app/",
    github: "https://github.com/Nurhassan45/HubbyHub_Client_Side",
    challenges: "Managing real-time stock updates during high traffic was challenging.",
    improvements: "Integrate payment gateway and customer reviews.",
    accent: "bg-amber-100 border-amber-200 text-amber-800"
  },
  3: {
    name: "PayBill",
    tech: ["React", "Firebase", "API integration","sweetalert2" ,"firebase-auth" ,"tailwindcss", "vite" ,"raect", "framer-motion", "daisyui"],
    description: " A React frontend for managing online payments, tracking bill status, and admin controls with Firebase Auth and Firestore.",
    live: "assignmentfirebase9.web.app/",
    github: "https://github.com/Nurhassan45/PayBill",
    challenges: "Dynamic calendar and multi-step booking flow required careful state handling.",
    improvements: "Add flight & hotel filters, and support multiple currencies.",
    accent: "bg-emerald-100 border-emerald-200 text-emerald-800"
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <p className="text-2xl font-medium text-gray-600">Project not found</p>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`mb-16 p-8 rounded-2xl ${project.accent} border`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-lg bg-white flex items-center justify-center shadow-sm">
                <span className="text-3xl">
                  {id === "1" ? "📦" : id === "2" ? "🎨" : "✈️"}
                </span>
              </div>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{project.name}</h1>
              <p className="text-lg text-gray-700">{project.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-6 lg:col-span-1">
            {/* Tech Stack */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Project Links */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Project Links
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Live Demo</p>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-all flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {project.live}
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Source Code</p>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-all flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    {project.github}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Challenges */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">Development Challenges</h2>
                  <p className="text-gray-700">{project.challenges}</p>
                </div>
              </div>
            </motion.div>

            {/* Improvements */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">Future Improvements</h2>
                  <p className="text-gray-700">{project.improvements}</p>
                </div>
              </div>
            </motion.div>

            {/* Visual Preview */}
            {/* <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Project Preview</h2>
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p>Project Screenshot</p>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button 
            onClick={() => window.history.back()} 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;