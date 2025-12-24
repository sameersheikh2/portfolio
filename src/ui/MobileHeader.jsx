import { Home, User, Code, Folder, Mail, User as UserIcon } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

const MobileHeader = ({ scrollTo }) => {
  const { isLight } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const iconColor = isLight ? "text-gray-900" : "text-gray-100";

  const navItems = [
    {
      id: "home",
      icon: <Home className={`h-4 w-4 ${iconColor}`} />,
      label: "Home",
      href: "#home",
    },
    {
      id: "about",
      icon: <User className={`h-4 w-4 ${iconColor}`} />,
      label: "About",
      href: "#about",
    },
    {
      id: "skills",
      icon: <Code className={`h-4 w-4 ${iconColor}`} />,
      label: "Skills",
      href: "#skills",
    },
    {
      id: "projects",
      icon: <Folder className={`h-4 w-4 ${iconColor}`} />,
      label: "Projects",
      href: "#projects",
    },
    {
      id: "contact",
      icon: <Mail className={`h-4 w-4 ${iconColor}`} />,
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isScrolled ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <header
        className={`w-full border-b ${
          isLight
            ? "border-gray-200 bg-white/95"
            : "border-gray-800 bg-gray-900/95"
        } backdrop-blur-sm shadow-sm`}
      >
        <div className="mx-auto max-w-4xl px-4">
          <nav className="flex items-center justify-between h-14">
            <div className="flex items-center space-x-2">
              <img
                src="/me.jpg"
                alt="Profile"
                className="h-6 w-6 rounded-full object-cover border border-gray-200 dark:border-gray-600"
              />
              <span className="text-sm font-semibold">Sameer Sheikh</span>
            </div>
            <div className="flex items-center space-x-1">
              <TooltipProvider>
                {navItems.map((item) => (
                  <Tooltip key={item.id}>
                    <TooltipTrigger asChild>
                      <a
                        href={item.href}
                        onClick={(e) => scrollTo(e, item.href)}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label={item.label}
                        title={item.label}
                      >
                        {item.icon}
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default MobileHeader;
