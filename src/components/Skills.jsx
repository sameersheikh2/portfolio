import React, { useContext } from "react";
import { skills } from "../constant/data";
import { Badge } from "../../components/ui/badge";
import { BlurFade } from "../../components/ui/blur-fade";
import { ThemeContext } from "../contexts/ThemeContext";

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={0.04 * 7}>
          <h2 className="text-2xl font-bold mb-5">Skills</h2>
          {skills.map((skill, indx) => (
            <Badge
              className={`text-sm m-1 ${
                theme === "light"
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
              key={indx}
              variant="secondary"
            >
              {skill}
            </Badge>
          ))}
        </BlurFade>
      </div>
    </section>
  );
};

export default Skills;
