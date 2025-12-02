import { Dock, DockIcon } from "../../components/ui/dock";
import {
  Github,
  Linkedin,
  Moon,
  Sun,
  Home,
  User,
  Code,
  Folder,
  Mail,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Separator } from "../../components/ui/separator";
import MobileDock from "./MobileDock";

const NavDock = ({ isMobile, scrollTo }) => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const isLight = theme === "light";

  const navItems = [
    {
      id: "home",
      icon: <Home strokeWidth={1.75} />,
      label: "Home",
      href: "#home",
    },
    {
      id: "about",
      icon: <User strokeWidth={1.75} />,
      label: "About",
      href: "#about",
    },
    {
      id: "skills",
      icon: <Code strokeWidth={1.75} />,
      label: "Skills",
      href: "#skills",
    },
    {
      id: "projects",
      icon: <Folder strokeWidth={1.75} />,
      label: "Projects",
      href: "#projects",
    },
    {
      id: "contact",
      icon: <Mail strokeWidth={1.75} />,
      label: "Contact",
      href: "#contact",
    },
  ];

  if (isMobile) {
    return <MobileDock isLight={isLight} toggleTheme={toggleTheme} />;
  }

  return (
    <div className="relative">
      <TooltipProvider>
        <Dock
          iconMagnification={60}
          iconDistance={100}
          className={`!mt-0 p-8 border-[1px] rounded-full fixed left-1/2 -translate-x-1/2 bottom-6 z-50 ${
            isLight
              ? "border-gray-300 bg-white/80"
              : "border-gray-700 bg-gray-900/80"
          } backdrop-blur-sm`}
        >
          {navItems.map((item) => (
            <DockIcon
              key={item.id}
              className={isLight ? "hover:bg-black/10" : "hover:bg-white/10"}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    onClick={(e) => scrollTo(e, item.href)}
                    className="size-full flex items-center justify-center"
                  >
                    {item.icon}
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-full w-5" />
          <DockIcon
            className={isLight ? "hover:bg-black/10" : "hover:bg-white/10"}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/sameersheikh2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-full flex items-center justify-center"
                >
                  <Github
                    strokeWidth={1.75}
                    className="size-full cursor-pointer"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          <DockIcon
            className={isLight ? "hover:bg-black/10" : "hover:bg-white/10"}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://linkedin.com/in/sameersheikh2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-full flex items-center justify-center"
                >
                  <Linkedin
                    strokeWidth={1.75}
                    className="size-full cursor-pointer"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          <DockIcon
            onClick={toggleTheme}
            className={isLight ? "hover:bg-black/10" : "hover:bg-white/10"}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="size-full flex items-center justify-center">
                  {isLight ? (
                    <Sun
                      strokeWidth={1.75}
                      className="size-full cursor-pointer"
                    />
                  ) : (
                    <Moon
                      strokeWidth={1.75}
                      className="size-full cursor-pointer"
                    />
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isLight ? "Dark Mode" : "Light Mode"}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
};

export default NavDock;
