import { Link } from "react-router-dom";
import { TASKS } from "../data/tasks";
import styles from "./Tasks.module.css";

function Tasks() {
    const taskData = TASKS;

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Mes tâches</h2>
            <p className={styles.description}>La gestion des tâches sera ajoutée dans les prochaines fiches.</p>

            <ul className={styles.taskList}>
                {taskData.map((task) => (
                    <li key={task.id} className={styles.taskItem}>
                        <Link to={`/tasks/${task.id}`}>{task.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export { Tasks };
