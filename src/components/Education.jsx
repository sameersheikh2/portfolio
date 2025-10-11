import React from "react";
import { BlurFade } from "../../components/ui/blur-fade";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "../../components/ui/item";
import { Avatar } from "@radix-ui/themes";
import { education } from "../constant/data";

const Education = () => {
  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={0.04 * 7}>
          <h2 className="text-2xl font-bold mb-5">Education</h2>
          {education.map((ed) => (
            <Item key={ed.id}>
              <Avatar
                size="5"
                src={ed.avatarUrl}
                radius="full"
                fallback={ed.instituteName.substring(0, 4)}
              />
              <ItemContent className="hover:cursor-pointer">
                <ItemTitle className="font-semibold ">
                  {ed.instituteName}
                </ItemTitle>
                <ItemDescription>{ed.course}</ItemDescription>
              </ItemContent>
              <ItemActions className="text-gray-400 text-base">
                {ed.year}
              </ItemActions>
            </Item>
          ))}
        </BlurFade>
      </div>
    </section>
  );
};

export default Education;
