import { useState, useEffect } from "react";
import styles from "./Settings.module.css";

function Settings() {
    const [userName, setUserName] = useState("Guest");

    useEffect(() => {
        document.title = `Settings - ${userName}`;
        return () => {
            document.title = `My Table Board`;
        };
    }, [userName]);

    return (
        <div className={styles["container"]}>
            <h2 className={styles["title"]}>Settings</h2>

            <div className={styles["settingsGroup"]}>
                <label htmlFor="user-name" className={styles["label"]}>
                    Your profile name
                    <input
                        type="text"
                        name="name"
                        id="user-name"
                        className={styles["input"]}
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter your name..."
                    />
                </label>

                <p className={styles["welcomeText"]}>
                    👋 Hi, <span className={styles["userNameHighlight"]}>{userName}</span>! This name is synced with the
                    tab title.
                </p>
            </div>
        </div>
    );
}

export default Settings;
