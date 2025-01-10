import React, { useLayoutEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") || "dark-theme"
  );

  function clickHandler() {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  }

  useLayoutEffect(() => {
    window.localStorage.getItem("theme", theme);
    document.documentElement.className = theme || "dark-theme";
  }, [theme]);

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">QuizApp</div>
        <div className="theme-toggle" onClick={clickHandler}>
          {theme === "dark-mode" ? <MdDarkMode /> : <MdLightMode />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
