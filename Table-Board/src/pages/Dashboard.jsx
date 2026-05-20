import { useState, useEffect } from "react";
import { WeatherWidgetMemo } from "../components/WeatherWidget";
import styles from "./Dashboard.module.css";

function Dashboard() {
    const [secondesActivite, setSecondesActivite] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecondesActivite((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return (
        <div className={styles["container"]}>
            <h2 className={styles["title"]}>Table Board</h2>
            <p className={styles["timerCard"]}>
                <span>⏱️</span>{" "}
                <span>
                    Session time: <strong>{secondesActivite}</strong>sec
                </span>
            </p>
            {<WeatherWidgetMemo longitude={2.3522} latitude={48.8566} />}
        </div>
    );
}

export default Dashboard;
