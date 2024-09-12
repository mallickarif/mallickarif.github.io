import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
    const { theme } = useContext(ThemeContext);
  
    return (
      <header className={theme === 'dark' ? 'header-dark' : 'header-light'}>
        {/* Header content */}
      </header>
    );
  };
  
  export default Header;