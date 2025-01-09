// path/to/your/Navbar.js
import React, { useEffect, useState, useLayoutEffect } from "react";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [theme, setTheme] = useState();

  function clickHandler() {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  }

  useLayoutEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    setTheme(savedTheme ? savedTheme : "light-mode");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          QuizApp
        </div>
        <div className="theme-toggle" onClick={clickHandler}>
          <MdDarkMode className="theme-icon" />
          <span className="theme-text">Toggle Dark Mode</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;