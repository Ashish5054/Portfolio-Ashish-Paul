import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowRight } from "react-icons/fi";
import { FaReact, FaHtml5, FaBootstrap, FaGit } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, } from "react-icons/si";

const HomePage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const techStack = [
    { icon: <FaReact className="text-blue-500" size={24} />, name: "React" },
    { icon: <SiTailwindcss className="text-cyan-400" size={24} />, name: "Tailwind CSS" },
    { icon: <SiJavascript className="text-blue-600" size={24} />, name: "JavaScript" },
    { icon: <FaHtml5 className="text-green-500" size={24} />, name: "HTML and CSS" },
    { icon: <FaBootstrap className="text-purple-500" size={24} />, name: "Bootstrap" },
    { icon: <FaGit className="text-purple-500" size={24} />, name: "version control git" }

  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      tags: ["React", "Tailwind Css"]
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      tags: ["React", "JavaScript", "Tailwind Css"]
    },
    {
      title: "Portfolio Website",
      description: "Interactive portfolio with 3D elements",
      tags: ["JavaScript", "Tailwind CSS", "React Js"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center md:text-left md:flex items-center justify-between"
        >
          <div className="md:w-1/2">
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
            >
              Hi, I'm <span className="text-blue-600">Ashish Paul</span>
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-gray-600 mb-8"
            >
              Frontend Developer & UI Designer
            </motion.p>
            <motion.div variants={fadeIn} className="flex gap-4 justify-center md:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2"
              >
                View My Work <FiArrowRight />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-gray-300 rounded-lg font-medium"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>
          <motion.div 
            variants={fadeIn}
            className="mt-12 md:mt-0 md:w-2/5 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-100 rounded-full overflow-hidden border-4 border-white shadow-xl">
                {/* Replace with your image */}
                <div className="w-full h-full bg-blue-200 flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
              </div>
              <motion.div 
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 4, repeat: Infinity } 
                }}
                className="absolute -bottom-5 -left-5 bg-white p-3 rounded-full shadow-lg"
              >
                <FaReact className="text-blue-500" size={32} />
              </motion.div>
              
              <motion.div 
                animate={{ 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 5, repeat: Infinity } 
                }}
                className="absolute -top-5 -right-5 bg-white p-3 rounded-full shadow-lg"
              >
                <SiTailwindcss className="text-cyan-400" size={32} />
              </motion.div>
              <motion.div 
                animate={{ 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 5, repeat: Infinity } 
                }}
                className="absolute -top-5 -left-5 bg-white p-3 rounded-full shadow-lg"
              >
                <SiJavascript className="text-cyan-400 absolute  -right-5 rounded-full shadow-xl" size={32} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
      </section>

      {/* Tech Stack Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            My Tech Stack
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-white shadow-sm hover:shadow-md transition-all"
              >
                {tech.icon}
                <span className="mt-2 font-medium text-gray-700">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-center text-gray-900 mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Here are some of my recent projects that showcase my skills and expertise
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 relative overflow-hidden">
                  <motion.div 
                    animate={hoveredCard === index ? { scale: 1.1 } : { scale: 1 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <span className="text-6xl text-white opacity-20">0{index + 1}</span>
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-600 mb-8">
              Have a project in mind or want to discuss potential opportunities?
            </p>
            <motion.a
              href="mailto:hello@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-medium text-lg"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-6 mt-12"
          >
            <motion.a 
              href="https://github.com" 
              target="_blank"
              whileHover={{ y: -3 }}
              className="p-3 bg-gray-100 rounded-full"
            >
              <FiGithub size={24} className="text-gray-700" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank"
              whileHover={{ y: -3 }}
              className="p-3 bg-gray-100 rounded-full"
            >
              <FiLinkedin size={24} className="text-blue-600" />
            </motion.a>
            <motion.a 
              href="https://twitter.com" 
              target="_blank"
              whileHover={{ y: -3 }}
              className="p-3 bg-gray-100 rounded-full"
            >
              <FiTwitter size={24} className="text-blue-400" />
            </motion.a>
            <motion.a 
              href="mailto:hello@example.com" 
              whileHover={{ y: -3 }}
              className="p-3 bg-gray-100 rounded-full"
            >
              <FiMail size={24} className="text-red-500" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;