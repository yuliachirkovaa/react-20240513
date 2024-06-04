import { useMemo, useState } from "react";
import { themes } from "./constants";
import { ThemeContext } from "./context";

export const ThemeContextProvider = ( {children} ) => {
  const [theme, setTheme] = useState(themes.default);

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme(
          theme === themes.default? themes.alternative : themes.default
        ),
    }),
    [theme])

  return (
    <ThemeContext.Provider value = {contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
