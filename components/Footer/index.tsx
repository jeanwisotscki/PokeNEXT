import React from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import styles from "./index.module.css";

const Footer = () => {
  const { isDarkTheme } = React.useContext(ThemeContext);

  return (
    <footer
      className={`${styles.footer} ${isDarkTheme ? styles.dark : styles.light}`}
    >
      <p>
        <strong>PokeNEXT </strong>
        &copy; 2022
      </p>
      <span>
        Desenvolvido por{" "}
        <a
          style={{ color: "#fff" }}
          href="https://github.com/jeanwisotscki"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jean Wisotscki
        </a>
      </span>
    </footer>
  );
};

export default Footer;
