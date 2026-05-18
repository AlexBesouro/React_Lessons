import { Link } from "react-router-dom";
import { useTaskContext } from "../hooks/useTaskContext";
import styles from "./TaskList.module.css";
function TaskList() {
    const { state, dispatch } = useTaskContext();
    const filteredTasks =
        state.filter === "all"
            ? state.tasks
            : state.filter === "done"
              ? state.tasks.filter((task) => task.done)
              : state.tasks.filter((task) => !task.done);

    return (
        <div className={styles["container"]}>
            <div className={styles["filter-buttons"]}>
                {["all", "active", "done"].map((btn) => (
                    <button key={btn} onClick={() => dispatch({ type: "FILTER_TASK", payload: btn })}>
                        {btn === "all" && `All (${state.tasks.length})`}
                        {btn === "active" && `Active (${state.tasks.filter((t) => !t.done).length})`}
                        {btn === "done" && `Done (${state.tasks.filter((t) => t.done).length})`}
                    </button>
                ))}
            </div>
            <ul className={styles["taskList"]}>
                {filteredTasks.map((task) => (
                    <li key={task.id} className={styles["taskItem"]}>
                        <Link to={`/tasks/${task.id}`}>{task.title}</Link>
                    </li>
                ))}
            </ul>
            {filteredTasks.length === 0 && <p>There are no tasks</p>}
        </div>
    );
}
export { TaskList };
