import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-100 dark:bg-gray-900 w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto max-w-3xl text-center"
      >
        <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white">
          Yo! I'm [Your Name] 👋
        </h2>

        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Just a tech enthusiast & student who loves building cool stuff with code.
          I’m all about learning, experimenting, and making things work (even after breaking them a few times 😆).
        </p>

        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Right now, I’m exploring full-stack development, geeking out over Laravel, Next.js, and React,
          and probably debugging something I forgot to save.
        </p>

        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Looking forward to collaborating, building awesome projects, and improving every day!
        </p>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 flex flex-wrap justify-center gap-4"
        >
          {[
            "Laravel",
            "Next.js",
            "React.js",
            "Tailwind CSS",
            "TypeScript",
            "Prisma ORM",
            "Filament",
            "ShadCN UI",
          ].map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="px-5 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white shadow-md
                         transition-transform transform hover:scale-110 hover:bg-blue-500 hover:text-white cursor-pointer"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold shadow-lg
                       hover:bg-blue-600 transition-transform transform hover:scale-105"
          >
            Check out my projects! 🚀
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
