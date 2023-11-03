import React, { createContext } from "react";

export const ThemeContext = createContext('');

function ThemeProvider({ children }) {
    return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
