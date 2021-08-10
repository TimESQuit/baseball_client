import React, { createContext, useContext, useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { customThemeObject } from "./themeObject";
import useLocalStorage from "../utils/useLocalStorage";

type ThemeContextType = [boolean, Function];

const DarkThemeContext = createContext<ThemeContextType>(undefined!);
const useDarkContext = () => useContext(DarkThemeContext);

type Props = { children: React.ReactNode };

const CustomThemeProvider = ({ children }: Props) => {
  const [savedTheme, setSavedTheme] = useLocalStorage("darkTheme", false);
  const [isDark, setIsDark] = useState(savedTheme);
  const theme = createTheme({
    ...customThemeObject,
    palette: {
      type: isDark ? "dark" : "light",
    },
  });

  useEffect(() => {
    setSavedTheme(isDark);
  }, [isDark]);

  return (
    <DarkThemeContext.Provider value={[isDark, setIsDark]}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DarkThemeContext.Provider>
  );
};

export default CustomThemeProvider;
export { useDarkContext };
