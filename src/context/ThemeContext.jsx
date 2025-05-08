import React, { createContext, useState, useEffect } from "react";
import "./ThemeContext.css"; // CSS file for styling

export const ThemeContext = createContext();
    // themeprovider pura theme ka child ma use hota 
    // css variable bnao themecontext.css ma pura project ma use ho sakta

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div> {/* Apply theme class */}
    </ThemeContext.Provider>
  );
};