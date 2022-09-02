import React from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import styles from "./index.module.css";

export const ThemeButton = () => {
  const { isDarkTheme, setIsDarkTheme } = React.useContext(ThemeContext);

  function toggleTheme() {
    setIsDarkTheme!(!isDarkTheme);
    localStorage.setItem("@isDark", JSON.stringify(!isDarkTheme));
  }

  return (
    <button
      aria-label="trocar tema"
      className={`${styles.button} ${
        isDarkTheme ? styles.dark : styles.light
      } `}
      onClick={toggleTheme}
    >
      Tema
    </button>
  );
};
