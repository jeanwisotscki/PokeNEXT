import React from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import styles from "./index.module.css";

export const ThemeButton = () => {
  const { isDarkTheme, setIsDarkTheme } = React.useContext(ThemeContext);

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
    document.querySelector("body")!.classList.toggle("dark");
  }

  return (
    <button
      aria-label="toggle theme"
      className={`${styles.button} ${
        isDarkTheme ? styles.dark : styles.light
      } `}
      onClick={toggleTheme}
    >
      Trocar tema
    </button>
  );
};
