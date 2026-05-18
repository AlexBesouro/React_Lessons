import { useTheme } from "../hooks/useTheme";
import styles from "./ThemeToggle.module.css";
function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const nextTheme = theme === "light" ? "dark" : "light";

    return (
        <div>
            <button
                className={styles["toggle-theme-btn"]}
                onClick={toggleTheme}
                aria-label={`Switch to ${nextTheme} theme`}
            >
                {`Switch to ${nextTheme} mode`}
            </button>
        </div>
    );
}

export { ThemeToggle };
