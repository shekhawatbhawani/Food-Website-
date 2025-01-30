import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
           
          >
            <FaFacebook className="w-6 h-6 hover:text-emerald-500  transition duration-300" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          
          >
            <FaInstagram className="w-6 h-6 hover:text-emerald-500  transition duration-300" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
           
          >
            <FaTwitter className="w-6 h-6 hover:text-emerald-500  transition duration-300" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
           
          >
            <FaLinkedinIn className="w-6 h-6 hover:text-emerald-500  transition duration-300" />
          </a>
        </div>

        {/* Copyright Text */}
        <div className="text-center text-gray-300">
          <p className="lg:text-xl sm:text-sm">
            Created by Bhawani Singh | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;