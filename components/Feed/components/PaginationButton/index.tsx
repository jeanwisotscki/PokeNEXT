import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

import styles from "./index.module.css";

interface IPaginationButtonProps {
  children: string;
  onClick: () => void;
}

export const PaginationButton: React.FC<IPaginationButtonProps> = ({
  children,
  onClick,
}) => {
  const { isDarkTheme } = React.useContext(ThemeContext);

  return (
    <button
      className={`${styles.btn} ${isDarkTheme ? styles.dark : styles.light} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
