import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div style={{ fontSize: "1.3rem", fontWeight: "bold", color: "var(--accent)" }}>📊 My Dashboard</div>
            <div className={styles.navbar}>
                <NavLink to="/" end className={({ isActive }) => (isActive ? styles.active : "")}>
                    Home
                </NavLink>
                <NavLink to="/tasks" className={({ isActive }) => (isActive ? styles.active : "")}>
                    Tasks
                </NavLink>
                <NavLink to="/notes" className={({ isActive }) => (isActive ? styles.active : "")}>
                    Notes
                </NavLink>
                <NavLink to="/settings" className={({ isActive }) => (isActive ? styles.active : "")}>
                    Settings
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
