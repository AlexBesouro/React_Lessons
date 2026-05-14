import styles from "./Settings.module.css";

function Settings() {
    return (
        <div className={styles.settings}>
            <div className={styles["settings-section"]}>
                <h2>Application Settings</h2>
                <div className={styles["settings-group"]}>
                    <div className={styles["setting-item"]}>
                        <div className={styles["setting-label"]}>
                            <h3>Dark Mode</h3>
                            <p>Use dark theme</p>
                        </div>
                        <div className={styles["setting-control"]}>
                            <input type="checkbox" defaultChecked />
                        </div>
                    </div>

                    <div className={styles["setting-item"]}>
                        <div className={styles["setting-label"]}>
                            <h3>Notifications</h3>
                            <p>Receive notifications</p>
                        </div>
                        <div className={styles["setting-control"]}>
                            <input type="checkbox" defaultChecked />
                        </div>
                    </div>

                    <div className={styles["setting-item"]}>
                        <div className={styles["setting-label"]}>
                            <h3>Language</h3>
                            <p>Choose interface language</p>
                        </div>
                        <div className={styles["setting-control"]}>
                            <select defaultValue="en">
                                <option value="en">English</option>
                                <option value="ru">Русский</option>
                                <option value="fr">Français</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["settings-section"]}>
                <h2>Privacy</h2>
                <div className={styles["settings-group"]}>
                    <div className={styles["setting-item"]}>
                        <div className={styles["setting-label"]}>
                            <h3>Analytics</h3>
                            <p>Help improve the application</p>
                        </div>
                        <div className={styles["setting-control"]}>
                            <input type="checkbox" defaultChecked />
                        </div>
                    </div>
                </div>

                <div className={styles["settings-buttons"]}>
                    <button className={styles["save-button"]}>Save Changes</button>
                    <button className={styles["reset-button"]}>Reset</button>
                </div>
            </div>
        </div>
    );
}
export default Settings;
