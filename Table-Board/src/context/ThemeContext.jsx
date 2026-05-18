import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();
const LOCAL_STORAGE_THEME_KEY = "table-board-theme";

function getInitialTheme() {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    function toggleTheme() {
        setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export { ThemeProvider, ThemeContext };
