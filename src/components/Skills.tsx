"use client";
import React from "react";
import SectionWrapper from "./SectionWrapper";
import { SkillsData } from "@/data/skills";
import Image from "next/image";

const Skills = () => {
  const duplicatedSkills = [...SkillsData, ...SkillsData];
  return (
    <SectionWrapper heading="Skills">
      <div className="w-full overflow-hidden py-8">
        <div className="relative">
          {/* Infinite scrolling container */}
          <div className="animate-infinite-scroll flex w-max gap-8">
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`${skill.title}-${index}`}
                className="flex flex-col items-center justify-center gap-2 w-24"
              >
                <div className="w-16 h-16 flex items-center justify-center ">
                  <Image
                    src={skill.imageSrc}
                    alt={skill.title}
                    width={64}
                    height={64}
                    className="object-contain "
                    unoptimized // Since these are SVGs from CDN
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
Skills.displayName = "Skills";

export default Skills;
