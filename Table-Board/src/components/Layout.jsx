import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import styles from "./Layout.module.css";

function Layout() {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <Navbar />
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.container}>
                    <Outlet />
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2026 Table Board System</p>
            </footer>
        </div>
    );
}

export { Layout };
