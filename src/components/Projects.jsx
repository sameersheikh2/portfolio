import React from "react";
import { projects } from "../constant/data";
import ProjectCard from "../ui/ProjectCard";
import { BlurFade } from "../../components/ui/blur-fade";
import { Badge } from "../../components/ui/badge";

const Projects = () => {
  return (
    <section id="projects">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={0.04 * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                <Badge
                  className={`text-sm m-1 ${"dark:bg-white bg-black text-white dark:text-black hover:bg-gray-200"}`}
                  variant="secondary"
                >
                  My Project
                </Badge>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my projects
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;ve worked on a few projects, from simple websites to
                complex web applications. Here are a few of my favorites.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[700px] mx-auto">
          {projects.map((project, id) => (
            <BlurFade key={project.id} delay={0.04 * 12 + id * 0.05}>
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                video={project.video}
                link={project.sourceLink}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
