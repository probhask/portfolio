"use client";
import { Theme, ThemeContextType } from "@/types/theme";
import {
  ReactNode,
  useContext,
  useState,
  createContext,
  useEffect,
} from "react";

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(Theme.Dark);

  // Apply theme to HTML element when theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", Theme.Dark);
    // document.body.classList.toggle("");
  }, [theme]);

  const toggleTheme = () => {
    if (theme === Theme.Light) {
      return setTheme(Theme.Dark);
    }
    setTheme(Theme.Light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
