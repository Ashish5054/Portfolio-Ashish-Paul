import React from 'react';
import { motion } from 'framer-motion';
import { FaReact } from "react-icons/fa";
import Home from "../Pages/Home"
import Contact from "../Pages/Contact"
import { Link } from 'react-router-dom';
const Footer = () => {
  

  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
        <div className='flex justify-around'>
        <div className="flex items-center mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="mr-3"
              >
                <FaReact className="text-blue-400 text-2xl" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Ashish Paul
              </span>
            </div>
 <div className="mt-8 pt-6 border-t border-gray-700 text-center">
        <p className="text-gray-400 text-center md:text-left">
              Creating beautiful, functional digital experiences with modern web technologies.
            </p>
        </div>
            <div>
              <h2>Ouick Link</h2>
              
              
            </div>
            </div>
       
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} Ashish Paul. All rights reserved.</p>
          <p className="mt-1">Built with React, Tailwind CSS, and Framer Motion</p>
        </motion.div>
        
    </footer>
  );
};

export default Footer;