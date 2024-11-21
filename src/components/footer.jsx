// src/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white mt-10 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Made with Love by Uchenna Joel Eze
        </p>
        {/* <div className="mt-2">
          <a href="#" className="text-white hover:text-gray-400 mx-2">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:text-gray-400 mx-2">
            Terms of Service
          </a>
          <a href="#" className="text-white hover:text-gray-400 mx-2">
            Contact Us
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
