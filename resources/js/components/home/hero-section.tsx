import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowDown } from "lucide-react";

const roles = ["Web Developer", "Frontend Engineer", "UI/UX Designer"];

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white-100 to-white-300 dark:from-gray-900 dark:to-gray-800 w-screen">
      {/* Profile Image */}
      <motion.img
        src="/profile.jpg"
        alt="Profile Avatar"
        className="w-32 h-32 rounded-full shadow-lg border-4 border-white dark:border-gray-700"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Name & Title */}
      <motion.h1
        className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-blue-500">Your Name</span> 👋
      </motion.h1>

      {/* Typing Effect */}
      <motion.p
        className="mt-2 text-xl md:text-2xl text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="font-semibold">{"< " + roles[0] + " />"}</span>
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Button className="px-6 py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
          <a href="#projects">View Projects</a>
        </Button>
        <Button variant="outline" className="px-6 py-3 text-lg">
          <a href="#contact">Contact Me</a>
        </Button>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="mt-6 flex space-x-6 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" title="Visit my GitHub profile">
          <Github className="w-6 h-6 hover:text-black dark:hover:text-white transition" />
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" title="Visit my LinkedIn profile">
          <Linkedin className="w-6 h-6 hover:text-blue-700 transition" />
        </a>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-6 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </motion.div>
    </section>
  );
}
