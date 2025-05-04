"use client";
import { ContactInformation } from "@/data/contact";
import React, { useEffect, useState } from "react";

const Intoduction = () => {
  const name = "Bhaskar Shrama";
  const [displayedName, setDisplayedName] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      // Typing phase
      if (currentIndex < name.length) {
        timeout = setTimeout(() => {
          setDisplayedName((prev) => prev + name[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 150); // Adjust typing speed here
      } else {
        // Pause after typing complete
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause duration after typing
      }
    } else {
      // Deleting phase
      if (displayedName.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedName((prev) => prev.slice(0, -1));
        }, 100); // Adjust deleting speed here
      } else {
        // Restart typing after deleting complete
        timeout = setTimeout(() => {
          setIsTyping(true);
          setCurrentIndex(0);
        }, 500); // Pause before restart
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, displayedName, isTyping, name]);
  return (
    <div className="w-full h-screen max-h-[700px] p-4  flex  flex-col items-center justify-center">
      <div className=" text-center space-y-6">
        <div className="flex flex-col items-center justify-center gap-y-10">
          <h1 className="text-4xl sm:text-6xl font-bold">
            Hello, I'm <span className="text-primary">{displayedName}</span>
            <span className="animate-pulse font-normal">|</span> {/* Cursor */}
          </h1>
          <p className="text-lg">
            I am a React JS, MERN Stack Developer and a Learning Enthusiast who
            is passionate about developing modern and scalable websites and
            exploring new technologies and learning new skills.
          </p>
        </div>

        <div className="flex gap-4 items-center justify-center">
          {ContactInformation.map((item, index) => (
            <button
              type="button"
              key={index}
              className="flex items-center gap-x-2 p-2 rounded-lg text-lg font-bold text-primary border hover:bg-text hover:text-background transition-all duration-300 ease-in-out"
            >
              <item.icon />
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.name}
              </a>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

Intoduction.displayName = "Intoduction";
export default Intoduction;
