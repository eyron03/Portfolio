import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast, Toaster } from "sonner";


export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Detect dark mode using document.documentElement.classList
    const isDarkMode = document.documentElement.classList.contains("dark");

    toast.success(
        <span className="flex items-center gap-2">

          <span className={isDarkMode ? "text-white" : "text-gray-700"}>
            Message sent successfully, I'll reach out soon!
          </span>
        </span>,
        {
          duration: 4000,
          style: {
            background: isDarkMode ? "#1e293b" : "#ffffff",
            color: isDarkMode ? "#e2e8f0" : "#1e293b",
            border: isDarkMode ? "1px solid #0ea5e9" : "1px solid #3b82f6",
            boxShadow: isDarkMode
              ? "0px 5px 15px rgba(14, 165, 233, 0.5)"
              : "0px 5px 15px rgba(59, 130, 246, 0.3)",
            fontWeight: "500",
            padding: "12px 16px",
          },
        }
      );


    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 px-6 w-screen bg-gradient-to-b from-white-100 to-white-300 dark:from-gray-800 dark:to-gray-800">
      {/* Toaster with dynamic light/dark theme */}
      <Toaster position="top-center" richColors closeButton />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto max-w-lg text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Contact Me</h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Got a project idea or just want to say hi? Feel free to reach out!</p>

        <form onSubmit={handleSubmit} className="mt-8 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <input type="text" name="name" placeholder="Your Name" className="w-full p-3 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" className="w-full p-3 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" rows={4} className="w-full p-3 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white" value={formData.message} onChange={handleChange} required />

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button type="submit" className="w-full">Send Message</Button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
}
