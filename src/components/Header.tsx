"use client";
import { useTheme } from "@/context/theme.context";
import { Theme } from "@/types/theme";
import React from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header>
      <div className="">
        <div className="flex items-center justify-between p-4 float-right">
          <span
            className="cursor-pointer active:scale-90 transition-all text-2xl hover:bg-secondary p-2 rounded-full"
            onClick={toggleTheme}
          >
            {theme === Theme.Light ? <IoMoon /> : <IoSunny />}
          </span>
        </div>
      </div>
    </header>
  );
};
Header.displayName = "Header";
export default Header;
