import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    const getLinkClass = ({ isActive }) => (isActive ? styles["active"] : styles["link"]);

    return (
        <nav className={styles["navigation"]}>
            <NavLink to="/" end className={getLinkClass}>
                Dashboard
            </NavLink>
            <NavLink to="/notes" className={getLinkClass}>
                Notes
            </NavLink>
            <NavLink to="/tasks" className={getLinkClass}>
                Tasks
            </NavLink>
            <NavLink to="/settings" className={getLinkClass}>
                Settings
            </NavLink>
        </nav>
    );
}

export { Navbar };
