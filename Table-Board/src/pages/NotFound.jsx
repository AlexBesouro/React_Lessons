import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
    const navigate = useNavigate(); // Вызываем хук на верхнем уровне компонента

    return (
        <div className={styles["container"]}>
            <div className={styles["content"]}>
                <h1 className={styles["errorCode"]}>404</h1>
                <h2 className={styles["title"]}>Something went wrong</h2>
                <p className={styles["text"]}>This page doesn't exist or has been moved.</p>
                <button className={styles["button"]} onClick={() => navigate("/")}>
                    Back home
                </button>
            </div>
        </div>
    );
}

export default NotFound;
