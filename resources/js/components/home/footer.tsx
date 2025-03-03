import { Facebook, Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-0 mt-auto">
      {/* Line Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700 w-full py-2"></div>

      <div className="container mx-auto px-6 flex justify-center space-x-6 mt-4">
        {[
          { icon: <Github />, link: "https://github.com/eyron03" },
          { icon: <Linkedin />, link: "#" },
          { icon: <Twitter />, link: "https://twitter.com/" },
          { icon: <Facebook />, link: "https://www.facebook.com/eyron.arenas/" },
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
        © {new Date().getFullYear()} Aaron Christian Arenas. All rights reserved.
      </div>
    </footer>
  );
}
