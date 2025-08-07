import React, { useState, useEffect } from "react";
import pencil from "../../assets/pencil.svg";
import "../../assets/styles/global.css";

export const Header = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.body.className = newTheme ? "dark-theme" : "light-theme";
  };

  useEffect(() => {
    // Apply initial theme on first load
    document.body.className = isDark ? "dark-theme" : "light-theme";
  }, [isDark]);

  return (
    <header className={`main-header ${isDark ? "dark" : "light"}`}>
       <div className="logo-group">
        <img
          src={pencil}
          alt="Logo"
          className="logo-img"
        />
        <span className="logo-text">My Blog</span>
      </div>


      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      <div className="header-right">
        <input type="text" placeholder="Search..." className="search-input" />
        <button onClick={toggleTheme} className="theme-toggle">
          {isDark ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};

