"use client";
import { useEffect, useState } from "react";
import FloatingIcons from "./FloatingIcons";
// import Header from "./Header";

const Intoduction = () => {
  const name = "Bhaskar Sharma";
  const [displayedName, setDisplayedName] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (currentIndex < name.length) {
        timeout = setTimeout(() => {
          setDisplayedName((prev) => prev + name[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 150);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayedName.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedName((prev) => prev.slice(0, -1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true);
          setCurrentIndex(0);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, displayedName, isTyping, name]);

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full h-screen max-h-[700px] p-4 flex flex-col items-center justify-center text-primary relative overflow-hidden">
      {/* Animated background elements */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
      {/* <Header /> */}

      <div className="absolute inset-0 bg-[size:40px_40px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] -z-20"></div>

      <FloatingIcons />

      {/* Content */}
      <div className="text-center space-y-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-y-10">
          <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Hello, I&apos;m{" "}
            <span className="text-primary">{displayedName}</span>
            <span className="animate-pulse font-normal">|</span>
          </h1>

          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-300">
            React JS, MERN Stack Developer and a Learning Enthusiast .
          </p>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-300">
            Passionate about building modern, scalable web applications with
            cutting-edge technologies. Constantly exploring new tools and
            frameworks to enhance my skills and deliver high-performance
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

Intoduction.displayName = "Intoduction";
export default Intoduction;
