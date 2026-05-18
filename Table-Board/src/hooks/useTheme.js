import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme should be used in <ThemeProvider/>");
    }
    return context;
}

export { useTheme };
