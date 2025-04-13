import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("dark");
    const handleDarkMode = () => {
        return setTheme((prevMode) => prevMode === "dark" ? "light" : "dark");
    }
    return (
        <ThemeContext.Provider value={{ theme, handleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
} 