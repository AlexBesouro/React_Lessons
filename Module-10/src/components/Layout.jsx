import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "./Layout.module.css";

function Layout() {
    return (
        <div className={styles.layout}>
            {/* Navbar displayed on all pages */}
            <Navbar />

            {/* Outlet = location where React Router injects active page */}
            <main className={styles.main}>
                <div className="app">
                    <Outlet />
                </div>
            </main>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>📊 My Dashboard — 2026</p>
            </footer>
        </div>
    );
}

export default Layout;
