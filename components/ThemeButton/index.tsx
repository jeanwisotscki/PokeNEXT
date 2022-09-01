import React from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import styles from "./index.module.css";

export const ThemeButton = () => {
  const { isDarkTheme, setIsDarkTheme } = React.useContext(ThemeContext);

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
    console.log(isDarkTheme);
  }

  return (
    <button className={styles.button} onClick={toggleTheme}>
      ThemeButton
    </button>
  );
};
