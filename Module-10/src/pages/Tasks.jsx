import styles from "./Tasks.module.css";

function Tasks() {
    const tasks = [
        {
            id: 1,
            title: "Complete Project",
            description: "Finish React components",
            priority: "high",
            completed: false,
        },
        {
            id: 2,
            title: "Update Documentation",
            description: "Add new instructions",
            priority: "medium",
            completed: false,
        },
        { id: 3, title: "Testing", description: "Test all features", priority: "low", completed: false },
    ];

    return (
        <div className={styles.tasks}>
            <div className={styles["tasks-header"]}>
                <h2>My Tasks</h2>
                <div className={styles["tasks-actions"]}>
                    <span>{tasks.length} tasks</span>
                </div>
            </div>
            <div className={styles["tasks-list"]}>
                {tasks.map((task) => (
                    <div key={task.id} className={styles["task-item"]}>
                        <input type="checkbox" className={styles["task-checkbox"]} />
                        <div className={styles["task-content"]}>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <div className={styles["task-meta"]}>
                                <span className={`${styles["task-priority"]} ${styles[task.priority]}`}>
                                    {task.priority}
                                </span>
                                <span>{task.completed ? "Completed" : "In Progress"}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Tasks;
