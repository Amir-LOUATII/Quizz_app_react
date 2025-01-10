import { useEffect, useLayoutEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
let first = true;
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
    const storedTheme = window.localStorage.getItem("theme") || "dark-theme";
    setTheme(storedTheme);
    document.documentElement.className = storedTheme;
  }, []);

  useEffect(() => {
    if (!first) {
      window.localStorage.setItem("theme", theme);
      document.documentElement.className = theme;
    }
    first = false;
  }, [theme]);

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">QuizMaster</div>
        <div className="theme-toggle" onClick={clickHandler}>
          {theme === "dark-mode" ? <MdDarkMode /> : <MdLightMode />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
