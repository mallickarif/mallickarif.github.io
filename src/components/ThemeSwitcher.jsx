import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./style/ThemeToggle.css";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  
    return (
      <div className="toggle-container">
      <input 
        type="checkbox" 
        id="theme-toggle" 
        className="toggle-checkbox" 
        checked={theme === 'dark'} 
        onChange={toggleTheme} 
      />
      <label htmlFor="theme-toggle" className="toggle-label">
        <span className="toggle-ball"></span>
      </label>
    </div>
    );
  };
  
export default ThemeSwitcher;   