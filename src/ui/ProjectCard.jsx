import { Globe } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import React from "react";

const ProjectCard = ({
  title,
  href,
  description,
  dates,
  tags,
  link,
  video,
}) => {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border border-black/10 dark:border-gray-200/10 hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      {video && (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none w-full h-40 object-cover object-top"
        />
      )}
      <CardHeader className="px-2 py-1">
        <div>
          <CardTitle className="text-[14px]">{title}</CardTitle>
          <time className=" text-[11px] text-muted-foreground">{dates}</time>
          <p className="text-pretty font-sans text-[12px] text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2 py-0">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px] dark:bg-[#262626] bg-black/10 text-black dark:text-white"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        <div className="flex flex-row flex-wrap items-start gap-1 w-full">
          {href && (
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Badge className="flex gap-2 px-2 py-1 text-[10px] dark:bg-white dark:text-black text-white bg-black">
                <Globe />
                Website
              </Badge>
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                Source
              </Badge>
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
