import React, { createContext } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext({});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
