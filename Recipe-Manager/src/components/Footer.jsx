import styles from "./Footer.module.css";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer-content"]}>
                <div className={styles["footer-info"]}>
                    <h3>Recipe Book</h3>
                    <p>Cooking made simple. Your digital recipe manager.</p>
                </div>
            </div>

            <div className={styles["footer-bottom"]}>
                <p>&copy; {currentYear} Recipe Book Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}

export { Footer };
