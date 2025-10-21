import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaSmile, FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const logoVariants = {
    hover: {
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.5 },
    },
    tap: {
      scale: 0.95,
    }
  };

  const navItemVariants = {
    initial: { y: 0, color: "#6B7280" }, // gray-500
    hover: { 
      y: -5, 
      color: "#3B82F6", // blue-500
      transition: { type: "spring", stiffness: 300 }
    },
  };

  const underlineVariants = {
    initial: { width: 0 },
    hover: { width: "100%" },
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 10 }}
    >
      <div className="mx-auto px-6 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            Link="/"
            className="flex items-center"
            variants={logoVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
              <FaSmile/>
            </div>
            <span className="ml-3 text-xl font-semibold text-gray-800">
              Ashish Paul
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative"
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(null)}
                initial="initial"
                animate={isHovered === item.id ? "hover" : "initial"}
              >
                <motion.a
                  href={`#${item.id}`}
                  className="text-lg font-medium cursor-pointer"
                  variants={navItemVariants}
                >
                  {item.name}
                </motion.a>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                  variants={underlineVariants}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
            >
              {navItems.map((item) => (
                <motion.a
                  key={`mobile-${item.id}`}
                  href={`#${item.id}`}
                  className="block py-3 px-4 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
                  variants={mobileItemVariants}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;