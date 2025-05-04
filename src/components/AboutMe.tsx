import React from "react";
import SectionWrapper from "./SectionWrapper";

const AboutMe = () => {
  return (
    <SectionWrapper
      wrapperClassName="space-y-8 !mt-0"
      heading="About Me"
      description="I thrive on challenges, embrace continuous learning, and write code with passion"
    >
      <ul className="space-y-2">
        <li>
          I'm a developer with a strong focus on building modern, responsive,
          and user-friendly web applications. Skilled in Frontend, React Js and
          the MERN stack, I enjoy turning ideas into seamless digital
          experiences.
        </li>
        <li>
          I value clean code, performance optimization, and scalable
          architecture. With a commitment to continuous learning and attention
          to detail, I aim to create applications that are not only functional
          but also visually engaging and intuitive.
        </li>
        <li>
          Driven by curiosity and a love for innovation, I approach every
          project with creativity, responsibility, and a mindset for delivering
          quality work.
        </li>
      </ul>
    </SectionWrapper>
  );
};
AboutMe.displayName = "AboutMe";

export default AboutMe;
