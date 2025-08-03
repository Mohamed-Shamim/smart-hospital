import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGooglePlusG,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300">
      <div className="container  px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        {/* Left Column - Links */}
        <div>
          <div className="border-b-2 border-black inline-block mb-4"></div>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600">
                &gt; Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                &gt; About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                &gt; Academics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                &gt; Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                &gt; Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                &gt; Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                &gt; Annual Calendar
              </a>
            </li>
          </ul>
        </div>

        {/* Middle Column - Social Icons */}
        <div className="text-center">
          <div className="border-b-2 border-black inline-block mb-4"></div>
          <div className="flex  space-x-3">
            <a
              href="#"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              <FaGooglePlusG />
            </a>
            <a
              href="#"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>

        {/* Right Column - Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contato</h3>
          <div className="border-b-2 border-black w-12 mb-4"></div>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <MdEmail className="text-gray-600" />
              <span>smarthospitalrc@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdPhone className="text-gray-600" />
              <span>9999955555</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdLocationOn className="text-gray-600" />
              <span>25 Kings Street, CA</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-200 py-4 text-center text-sm text-gray-600">
        © Smart Hospital & Research Center 2024 All rights reserved
      </div>
    </footer>
  );
}
