import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <nav>
            <NavLink to="/" end className={({ isActive }) => (isActive ? styles["active"] : "")}>
                Home
            </NavLink>
            <NavLink to="/about" end className={({ isActive }) => (isActive ? styles["active"] : "")}>
                About
            </NavLink>
            <NavLink to="/contact" end className={({ isActive }) => (isActive ? styles["active"] : "")}>
                Contact
            </NavLink>
        </nav>
    );
}

export { Navbar };
