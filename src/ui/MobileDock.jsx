import { Github, Linkedin, Moon, Sun } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

const MobileDock = ({ isLight, toggleTheme }) => {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 px-4">
      <TooltipProvider>
        <div
          className={`flex items-center justify-center gap-4 p-2 rounded-full border mx-auto max-w-max ${
            isLight
              ? "bg-white/95 border-gray-200 shadow-lg"
              : "bg-gray-900/95 border-gray-700 shadow-lg"
          } backdrop-blur-sm`}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://github.com/sameersheikh2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>GitHub</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://linkedin.com/in/sameersheikh2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={
                  isLight ? "Switch to dark mode" : "Switch to light mode"
                }
              >
                {isLight ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{isLight ? "Dark Mode" : "Light Mode"}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
};

export default MobileDock;
