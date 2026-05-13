import { useEffect, useState } from "react";
import styles from "./WeatherWidget.module.css";

function WeatherWidget({ latitude, longitude }) {
    const [meteo, setMeteo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function loadWeather() {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=Europe/Paris`,
                );
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const loadedMeteo = await response.json();
                setMeteo(loadedMeteo);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        loadWeather();
    }, [latitude, longitude]);
    return (
        <div className={styles["weather-card"]}>
            {loading && <p className={styles["loading"]}>loading...</p>}
            {error && <p className={styles["error"]}>Something went wrong: {error}</p>}
            {!loading && !error && meteo && (
                <>
                    <h3 className={styles["city"]}>Local Weather</h3>
                    <div className={styles["temp-container"]}>
                        <span className={styles["temp"]}>{meteo.current.temperature_2m}</span>
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
