import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = (
    <>
      <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
      <li><a href="#Skill" className="hover:text-blue-600 transition">Skills</a></li>
      <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
      <li><a href="#Contact" className="hover:text-blue-600 transition">Contact</a></li>
    </>
  );

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm px-6 md:px-16 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <span className="bg-blue-600 text-white px-2 py-1 rounded-md">NHR</span>
        </div>

        {/* Center: Menu (hidden on mobile) */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium text-base">
          {menuItems}
        </ul>

        {/* Mobile toggle button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost btn-circle text-xl text-gray-700">
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="bg-white shadow-md px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium text-base">
            {menuItems}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
