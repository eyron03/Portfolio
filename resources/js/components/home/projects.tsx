import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with React and Tailwind CSS.",
    github: "https://github.com/yourgithub/project-one",
    live: "https://yourproject.com",
  },
  {
    title: "Project Two",
    description: "A full-stack app using Next.js and Firebase.",
    github: "https://github.com/yourgithub/project-two",
    live: "https://yourproject.com",
  },
  {
    title: "Project Three",
    description: "An AI-powered chatbot with a sleek UI.",
    github: "https://github.com/yourgithub/project-three",
    live: "https://yourproject.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-white dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Projects</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <a href={project.github} target="_blank" className="text-blue-500 hover:text-blue-600 flex items-center">
                  <Code className="w-5 h-5 mr-1" /> Code
                </a>
                <a href={project.live} target="_blank" className="text-green-500 hover:text-green-600 flex items-center">
                  <ExternalLink className="w-5 h-5 mr-1" /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
