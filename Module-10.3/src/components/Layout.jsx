import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import styles from "./Layout.module.css";

function Layout() {
    return (
        <div>
            <header>
                <Navbar />
            </header>

            <main>
                <Outlet />
            </main>
            <footer>
                <p>2026</p>
            </footer>
        </div>
    );
}

export { Layout };
