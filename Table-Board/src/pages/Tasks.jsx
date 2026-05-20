import styles from "./Tasks.module.css";
import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";

function Tasks() {
    return (
        <div className={styles["container"]}>
            <h1 className={styles["title"]}>My Tasks</h1>
            <TaskForm />
            <TaskList />
        </div>
    );
}

export default Tasks;
