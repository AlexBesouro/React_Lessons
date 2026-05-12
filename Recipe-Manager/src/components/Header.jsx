import styles from "./Header.module.css";
import logoImg from "../assets/recipe-book.webp";
function Header() {
    return (
        <header className={styles["header"]}>
            <div className={styles["header-hero"]}>
                <div className={styles["logo"]}>
                    <img src={logoImg} alt="Logo of my project" />
                </div>
                <h1>Recipe Book</h1>
            </div>
        </header>
    );
}

export { Header };
