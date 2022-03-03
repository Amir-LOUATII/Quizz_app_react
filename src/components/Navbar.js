import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [theme, setTheme] = useState(window.localStorage.getItem("theme"));

  function clickHandler() {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  }
  useEffect(() => {
    document.documentElement.className = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <header>
      <div className="container">
        <div className="logo">
          Quiz<span>App</span>
        </div>
        <div onClick={clickHandler}>
          <MdDarkMode />
          <span>Dark Mode</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
