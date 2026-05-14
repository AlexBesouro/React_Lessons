import { useParams, useNavigate } from "react-router-dom";
import { TASKS } from "../data/tasks";
import styles from "./TaskDetail.module.css";

function TaskDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const task = TASKS.find((t) => t.id === Number(id));
    if (!task) {
        return (
            <div className={styles.errorContainer}>
                <h2 className={styles.errorTitle}>Something went wrong :(</h2>
                <p className={styles.description}>This page doesn't exist</p>
                <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => navigate("/tasks")}>
                    Back to tasks
                </button>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>{task.title}</h2>
                <div className={styles.status}>{task.status}</div>

                <p className={styles.description}>{task.description}</p>

                <div className={styles.actions}>
                    <button className={`${styles.btn} ${styles.btnOutline}`} onClick={() => navigate(-1)}>
                        ← Back
                    </button>

                    <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => navigate("/tasks")}>
                        Mark as done
                    </button>
                </div>
            </div>
        </div>
    );
}
export { TaskDetail };
