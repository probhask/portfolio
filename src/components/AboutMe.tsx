import React from "react";
import SectionWrapper from "./SectionWrapper";

const AboutMe = () => {
  return (
    <SectionWrapper
      wrapperClassName="space-y-8"
      heading="About Me"
      description="Love challenges, love to learn, and love to code."
    >
      <div className="space-y-2">
        <p>
          Hello, I'm Bhaskar Sharma. I'm a developer with a strong focus on
          building modern, responsive, and user-friendly web applications.
          Skilled in Frontend, React Js and the MERN stack, I enjoy turning
          ideas into seamless digital experiences.
        </p>
        <p>
          I value clean code, performance optimization, and scalable
          architecture. With a commitment to continuous learning and attention
          to detail, I aim to create applications that are not only functional
          but also visually engaging and intuitive.
        </p>
        <p>
          Driven by curiosity and a love for innovation, I approach every
          project with creativity, responsibility, and a mindset for delivering
          quality work.
        </p>
      </div>
    </SectionWrapper>
  );
};
AboutMe.displayName = "AboutMe";

export default AboutMe;
