
import { useState, useEffect } from "react";
import { Sun, Moon, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
      ? "dark"
      : "light"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="w-full p-4 bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50 flex justify-items-center text-center">
      <div className="container mx-auto flex justify-between items-center">

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            onClick={() => setMenuOpen(!menuOpen)}
            variant="ghost"
            className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-all flex items-center justify-center"
          >
            <Menu className="w-6 h-6 text-gray-800 dark:text-gray-300" />
          </Button>
        </div>

        {/* Logo */}
        <a href="#" className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-500 transition-all">
          Portfolio
        </a>

        {/* Navigation Links */}
        <div className={`md:flex space-x-6 ${menuOpen ? "block" : "hidden"} flex items-baseline justify-center gap-2 md:flex-row absolute md:static top-16 left-0 w-full bg-white dark:bg-gray-900 md:w-auto md:bg-transparent md:dark:bg-transparent p-2 md:p-0 shadow-md md:shadow-none`}>
          {["About", "Projects", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="block md:inline text-gray-800 dark:text-gray-300 relative group transition-all duration-200"
            >
              {item}
              {/* Underline Effect */}
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Theme Toggle Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-all">
              {theme === "dark" ? (
                <Moon className="w-6 h-6 text-white" />
              ) : (
                <Sun className="w-6 h-6 text-yellow-400" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md p-2">
            <DropdownMenuItem
              onClick={() => setTheme("light")}
              className="flex items-center gap-2 px-4 py-2 cursor-pointer rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
            >
              <Sun className="w-6 h-6 text-yellow-400" /> Light Mode
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme("dark")}
              className="flex items-center gap-2 px-4 py-2 cursor-pointer rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
            >
              <Moon className="w-6 h-6 text-gray-300" /> Dark Mode
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
