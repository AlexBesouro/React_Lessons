import { useState, useEffect } from "react";
import styles from "./DynamicTitle.module.css";

function DynamicTitle() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = "New title";
        console.log(document.title);
    }, [counter]);

    useEffect(() => {
        console.log("New component mounted");
    }, []);

    return (
        <div className={styles["hero"]}>
            <h2 className={styles["counter"]}>Counter: {counter}</h2>
            <button className={styles.btn} onClick={() => setCounter(counter + 1)}>
                {" "}
                + 1
            </button>
        </div>
    );
}
export { DynamicTitle };
