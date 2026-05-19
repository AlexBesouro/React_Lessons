import { useTheme } from "../hooks/useTheme";
import styles from "./ThemeToggle.module.css";

function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const nextTheme = theme === "light" ? "dark" : "light";

    return (
        <div>
            <button
                className={styles["toggle-theme-btn"]}
                onClick={() => setTheme(nextTheme)}
                aria-label={`Switch to ${nextTheme} theme`}
            >
                {`Switch to ${nextTheme} mode`}
            </button>
        </div>
    );
}

export { ThemeToggle };
