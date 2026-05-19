import { useEffect, useState } from "react";
import styles from "./WeatherWidget.module.css";
import { useFetch } from "../hooks/useFetch";

function WeatherWidget({ latitude, longitude }) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=Europe/Paris`;
    const { data, loading, error } = useFetch(url);
    return (
        <div className={styles["weather-card"]}>
            {loading && <p className={styles["loading"]}>loading...</p>}
            {error && <p className={styles["error"]}>Something went wrong: {error}</p>}
            {!loading && !error && data && (
                <>
                    <h3 className={styles["city"]}>Local Weather</h3>
                    <div className={styles["temp-container"]}>
                        <span className={styles["temp"]}>{data.current.temperature_2m}</span>
                        <span className={styles["unit"]}>°C</span>
                    </div>
                    <p className={styles["coords"]}>
                        {latitude.toFixed(2)}°N, {longitude.toFixed(2)}°E
                    </p>
                </>
            )}
        </div>
    );
}

export { WeatherWidget };
