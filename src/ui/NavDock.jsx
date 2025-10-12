import { Dock, DockIcon } from "../../components/ui/dock";
import { Github, Linkedin, MoonStar, Sun } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Separator } from "../../components/ui/separator";
import { AnimatedThemeToggler } from "../../components/ui/animated-theme-toggler";

const NavDock = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className="relative">
      <TooltipProvider>
        <Dock
          iconMagnification={60}
          iconDistance={100}
          className={`!mt-0 p-8 border-[1px] rounded-full ${
            theme === "light" ? "border-gray-300" : "border-gray-700"
          }`}
        >
          <DockIcon
            className={
              theme === "light" ? "hover:bg-black/10" : "hover:bg-white/10"
            }
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://www.github.com/sameersheikh2"
                  target="_blank"
                  rel="noopener noreferrer"
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
            className={
              theme === "light" ? "hover:bg-black/10" : "hover:bg-white/10"
            }
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://www.linkedin.com/in/sameersheikh2"
                  target="_blank"
                  rel="noopener noreferrer"
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
          <Separator orientation="vertical" className="h-full w-5" />
          <DockIcon
            className={
              theme === "light" ? "hover:bg-black/10" : "hover:bg-white/10"
            }
          >
            <AnimatedThemeToggler />
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
};

export default NavDock;
