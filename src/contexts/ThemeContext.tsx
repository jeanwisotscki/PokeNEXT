import React from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface CreateContextProps {
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>> | null;
}

export const ThemeContext = React.createContext<CreateContextProps>({
  isDarkTheme: false,
  setIsDarkTheme: null,
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  React.useEffect(() => {
    const actualTheme: boolean = JSON.parse(localStorage.getItem("@isDark")!);

    setIsDarkTheme(actualTheme);
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
