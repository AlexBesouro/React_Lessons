import { useReducer } from "react";
import styles from "./Counter.module.css";

const initialState = { count: 0, step: 1 };

function counterReducer(state, action) {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                count: state.count + state.step,
            };
        case "SUBTRACT":
            return {
                ...state,
                count: state.count - state.step,
            };
        case "RESET":
            return {
                ...state,
                count: 0,
            };
        case "SET_STEP":
            return {
                ...state,
                step: action.payload,
            };
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    function handleSetStep() {
        const step = prompt("What step do you want to set?");
        if (step) {
            dispatch({ type: "SET_STEP", payload: Number(step) });
        }
    }

    return (
        <div className={styles["counter-card"]}>
            <h2 className={`${styles["counter"]} ${state.count < 0 ? styles.negative : ""}`}>
                Counter - {state.count}
            </h2>
            <button className={styles["add-btn"]} onClick={() => dispatch({ type: "ADD" })}>
                Add
            </button>
            <button className={styles["sub-btn"]} onClick={() => dispatch({ type: "SUBTRACT" })}>
                Subtract
            </button>
            <button className={styles["reset-btn"]} onClick={() => dispatch({ type: "RESET" })}>
                Reset
            </button>
            <button className={styles["step-btn"]} onClick={handleSetStep}>
                SET_STEP
            </button>
        </div>
    );
}
export { Counter };
