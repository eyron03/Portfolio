import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = ["Web Developer", "UI/UX Designer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white-100 to-white-300 dark:from-gray-900 dark:to-gray-800 gap-3">

      {/* Profile Image */}
      <motion.img
        src="images/avatar.jpg"
        alt="Profile Avatar"
        className="w-32 h-32 rounded-full shadow-lg border-4 border-white dark:border-gray-700"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Animated Intro */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
      >
        Hi, I'm <span className="text-blue-500">Aaron Christian Arenas</span> 👋
      </motion.h1>

      {/* Dynamic Typing Effect */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-2 text-xl md:text-2xl text-gray-700 dark:text-gray-300"
      >
        <span className="font-semibold">{roles[roleIndex]}</span>
      </motion.p>

      {/* Short Introduction */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-md"
      >
        Passionate about building interactive, scalable, and user-friendly web applications. Let's create something amazing together!
      </motion.p>

      {/* Soft Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-6 w-24 h-1 bg-blue-500 rounded-full"
      ></motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-6 text-gray-700 dark:text-gray-300 flex items-center space-x-2"
      >

      </motion.div>

    </section>
  );
}
