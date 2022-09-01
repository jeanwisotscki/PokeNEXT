import React from "react";

import styles from "./index.module.css";

export const ThemeButton = () => {
  return (
    <button className={styles.button} onClick={() => console.log("clicou")}>
      ThemeButton
    </button>
  );
};
