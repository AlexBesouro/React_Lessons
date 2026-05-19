import { createContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useLocalStorage("theme", "light");

    useEffect(() => {
        if (!theme) return;
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export { ThemeProvider, ThemeContext };
