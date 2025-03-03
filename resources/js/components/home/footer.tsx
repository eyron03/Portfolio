import { Facebook, Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-auto">
      <div className="container mx-auto px-6 flex justify-center space-x-6">
        {[
          { icon: <Github />, link: "https://github.com/" },
          { icon: <Linkedin />, link: "https://linkedin.com/" },
          { icon: <Twitter />, link: "https://twitter.com/" },
          { icon: <Facebook />, link: "https://facebook.com/" },
        ].map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-all hover:scale-110"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}
