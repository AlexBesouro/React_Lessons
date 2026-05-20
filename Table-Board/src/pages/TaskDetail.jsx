import { useParams, useNavigate } from "react-router-dom";

import styles from "./TaskDetail.module.css";
import { useTaskContext } from "../hooks/useTaskContext";

function TaskDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { state, dispatch } = useTaskContext();
    const task = state.tasks.find((t) => t.id === Number(id));

    if (!task) {
        return (
            <div className={styles["errorContainer"]}>
                <h2 className={styles["errorTitle"]}>Something went wrong :(</h2>
                <p className={styles["description"]}>This page doesn't exist</p>
                <button className={`${styles["btn"]} ${styles["btnPrimary"]}`} onClick={() => navigate("/tasks")}>
                    Back to tasks
                </button>
            </div>
        );
    }

    return (
        <div className={styles["container"]}>
            <div className={`${styles["card"]} ${task.done ? styles["cardDone"] : ""}`}>
                <h2 className={styles["title"]}>{task.title}</h2>

                <div className={`${styles["status"]} ${task.done ? styles["statusDone"] : styles["statusActive"]}`}>
                    Status: {task.done ? "Done" : "Active"}
                </div>

                <p className={styles["description"]}>{task.description}</p>

                <div className={styles["actions"]}>
                    <button className={`${styles["btn"]} ${styles["btnOutline"]}`} onClick={() => navigate(-1)}>
                        ← Back
                    </button>

                    <button
                        className={`${styles["btn"]} ${task.done ? styles["btnSecondary"] : styles["btnPrimary"]}`}
                        onClick={() => dispatch({ type: "DONE_TASK", payload: Number(id) })}
                    >
                        {task.done ? "Mark as active" : "Mark as done"}
                    </button>

                    <button
                        className={`${styles["btn"]} ${styles["btnDanger"]}`}
                        onClick={() => {
                            dispatch({ type: "DELETE_TASK", payload: Number(id) });
                            navigate("/tasks");
                        }}
                    >
                        Delete task
                    </button>
                </div>
            </div>
        </div>
    );
}
export default TaskDetail;
