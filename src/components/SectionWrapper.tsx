"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  heading: string;
  description?: string;
  id?: string;
  wrapperClassName?: string;
  headingClassName?: string;
  descriptionClassName?: string;
  children: React.ReactNode;
}
const SectionWrapper: React.FC<SectionWrapperProps> = ({
  heading,
  id,
  description,
  wrapperClassName,
  headingClassName,
  descriptionClassName,
  children,
}) => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Animation variants for scroll directions
  const scrollVariants = {
    down: {
      hidden: { opacity: 0, y: 40, scale: 0.98 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      },
      exit: { opacity: 0, y: -40, scale: 0.98, transition: { duration: 0.3 } },
    },
    up: {
      hidden: { opacity: 0, y: -40, scale: 0.98 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      },
      exit: { opacity: 0, y: 40, scale: 0.98, transition: { duration: 0.3 } },
    },
  };
  return (
    <motion.section
      id={id || heading}
      className={`w-full space-y-10 my-28 ${wrapperClassName}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-20% 0px -20% 0px" }} // Adjust margin to trigger earlier/later
      variants={scrollVariants[scrollDirection]}
      onViewportEnter={() => {}}
      onViewportLeave={() => {}}
    >
      <div className="space-y-2 flex flex-col items-center justify-center">
        <h2
          className={`text-center text-4xl font-bold border-b-2 w-fit first-letter:uppercase  ${headingClassName}`}
        >
          {heading}
        </h2>
        {description && (
          <motion.h3
            className={`font-bold text-xl first-letter:uppercase ${descriptionClassName}`}
            initial={{ opacity: 0, y: scrollDirection === "down" ? 20 : -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {description}
          </motion.h3>
        )}
      </div>
      {children}
      {/* </section> */}
    </motion.section>
  );
};
SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
