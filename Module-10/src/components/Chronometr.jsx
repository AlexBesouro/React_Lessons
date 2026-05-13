import { useEffect, useState } from "react";

function Chronometr() {
    const [seconds, setSeconds] = useState(0);
    const [isGoing, setIsGoing] = useState(false);

    useEffect(() => {
        let idTimer;
        if (isGoing) {
            idTimer = setInterval(() => {
                setSeconds((s) => s + 1);
            }, 1000);
        }
        return () => {
            clearInterval(idTimer);
            console.log("Timer stopped");
        };
    }, [isGoing]);
    return (
        <div>
            <h2>Time passed: {seconds}</h2>
            <button onClick={() => setIsGoing(!isGoing)}>{isGoing ? "Pause" : "Start"}</button>
            <button
                onClick={() => {
                    setSeconds(0);
                    setIsGoing(false);
                }}
            >
                Reset
            </button>
        </div>
    );
}

export { Chronometr };
