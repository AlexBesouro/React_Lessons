import styles from "./Tasks.module.css";

function Tasks() {
    const taskData = ["Apprendre React Router (en cours !)", "Découvrir useContext", "Maîtriser useReducer"];

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Mes tâches</h2>
            <p className={styles.description}>La gestion des tâches sera ajoutée dans les prochaines fiches.</p>

            <ul className={styles.taskList}>
                {taskData.map((task, index) => (
                    <li key={index} className={styles.taskItem}>
                        <span className={styles.taskEmoji}>📌</span>
                        <span className={styles.taskText}>{task}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export { Tasks };
