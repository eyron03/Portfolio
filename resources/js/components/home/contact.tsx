import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
// import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  // const { toast } = useToast(); // Use ShadCN toast

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("✅ Message Sent! I'll get back to you soon!");

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 px-6 w-screen bg-gradient-to-b from-white-100 to-white-300 dark:from-gray-800 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto max-w-lg text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Contact Me</h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Got a project idea or just want to say hi? Feel free to reach out!</p>

        <form onSubmit={handleSubmit} className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
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
