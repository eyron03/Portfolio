import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      {/* Navbar */}
      <nav className="flex justify-between p-4 shadow-md dark:shadow-gray-800">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div>
          <Button variant="ghost" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-4xl font-bold">Hello, I'm [Your Name]</h2>
        <p className="text-lg mt-2">A passionate developer building awesome projects.</p>
      </section>

      {/* About Me Section */}
      <section className="p-8">
        <h3 className="text-2xl font-bold">About Me</h3>
        <p className="mt-2">[Brief introduction about yourself]</p>
      </section>

      {/* Projects Section */}
      <section className="p-8">
        <h3 className="text-2xl font-bold">Projects</h3>
        <p className="mt-2">[Showcase your projects here]</p>
      </section>

      {/* Contact Section */}
      <section className="p-8">
        <h3 className="text-2xl font-bold">Contact</h3>
        <p className="mt-2">[Provide contact details or a form]</p>
      </section>
    </div>
  );
}
