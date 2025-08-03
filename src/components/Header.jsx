import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGooglePlusG,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaPhone,
  FaEnvelope,
  FaUser,
  FaEdit,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full">
      {/* Top Bar */}
      <motion.div
        className="bg-gray-100 flex flex-col md:flex-row justify-between items-center px-4 py-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Social Icons - Hidden on mobile */}
        <div className="hidden md:flex space-x-2 text-white container">
          <div className="flex space-x-2">
            {[
              FaFacebookF,
              FaTwitter,
              FaYoutube,
              FaGooglePlusG,
              FaLinkedinIn,
              FaInstagram,
              FaPinterestP,
            ].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-primary p-1.5 rounded hover:bg-blue-600"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Login Button */}
        <a
          href="#"
          className="flex items-center space-x-1 text-white bg-primary px-3 py-1 rounded hover:bg-blue-600 mt-2 md:mt-0"
        >
          <FaUser />
          <span>Login</span>
        </a>
      </motion.div>

      {/* Logo & Contact */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center px-4 py-3 border-b container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center space-x-2">
            <img src="front_logo.png" alt="Smart Hospital" className="h-12" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-primary"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Contact Info */}
        <div className="hidden md:flex flex-wrap items-center justify-center md:justify-end gap-4 mt-3 md:mt-0 text-sm md:text-base">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-xl md:text-2xl" />
            <a
              href="mailto:smarthospitalrc@gmail.com"
              className="text-black hover:underline"
            >
              smarthospitalrc@gmail.com
            </a>
          </div>
          <span className="h-8 w-[1px] bg-gray-300 hidden md:block"></span>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-xl md:text-2xl" />
            <span>9999955555</span>
          </div>
          <span className="h-8 w-[1px] bg-gray-300 hidden md:block"></span>
          <div className="flex items-center space-x-2">
            <FaEdit className="text-xl md:text-2xl" />
            <a href="#" className="text-black hover:underline">
              complain
            </a>
          </div>
        </div>
      </motion.div>

      {/* Navbar */}
      <motion.nav
        className="bg-primary text-white"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-wrap justify-center md:justify-start px-4 container">
          {[
            "Home",
            "Annual Calendar",
            "Appointment",
            "Events",
            "About Us",
            "Gallery",
            "Contact Us",
          ].map((item, i) => (
            <li
              key={i}
              className={`px-4 py-2 hover:bg-blue-600 cursor-pointer ${
                item === "Home" ? "bg-blue-700" : ""
              }`}
            >
              {item === "About Us" ? (
                <div className="relative group">
                  <span>{item}</span>
                  <div className="absolute left-0 hidden group-hover:block bg-white text-black mt-1 rounded shadow z-10 min-w-[200px]">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Our Mission
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Our Team
                    </a>
                  </div>
                </div>
              ) : (
                <a href="#">{item}</a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col px-4 container">
              {[
                "Home",
                "Annual Calendar",
                "Appointment",
                "Events",
                "About Us",
                "Gallery",
                "Contact Us",
              ].map((item, i) => (
                <li
                  key={i}
                  className={`px-4 py-3 border-b border-blue-600 hover:bg-blue-600 cursor-pointer ${
                    item === "Home" ? "bg-blue-700" : ""
                  }`}
                >
                  {item === "About Us" ? (
                    <details className="group">
                      <summary className="flex justify-between items-center">
                        <span>{item}</span>
                        <span className="group-open:rotate-180 transition-transform">
                          ▼
                        </span>
                      </summary>
                      <div className="ml-4 mt-2">
                        <a
                          href="#"
                          className="block py-2 hover:bg-blue-500 pl-2 rounded"
                        >
                          Our Mission
                        </a>
                        <a
                          href="#"
                          className="block py-2 hover:bg-blue-500 pl-2 rounded"
                        >
                          Our Team
                        </a>
                      </div>
                    </details>
                  ) : (
                    <a href="#" className="block">
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Contact Info */}
            <div className="bg-blue-700 p-4">
              <div className="flex items-center space-x-2 mb-3">
                <FaEnvelope className="text-xl" />
                <a
                  href="mailto:smarthospitalrc@gmail.com"
                  className="text-white hover:underline"
                >
                  smarthospitalrc@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <FaPhone className="text-xl" />
                <span className="text-white">9999955555</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEdit className="text-xl" />
                <a href="#" className="text-white hover:underline">
                  complain
                </a>
              </div>
            </div>
          </div>
        )}
      </motion.nav>
    </div>
  );
};

export default Header;
