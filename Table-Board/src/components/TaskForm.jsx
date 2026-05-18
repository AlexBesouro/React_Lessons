import { useState } from "react";
import { useTaskContext } from "../hooks/useTaskContext";
import styles from "./TaskForm.module.css";

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { dispatch } = useTaskContext();

    function handleSubmit(e) {
        e.preventDefault();
        const cleanTitle = title.trim();
        if (cleanTitle === "") return;

        dispatch({ type: "ADD_TASK", payload: { title: cleanTitle, description } });
        setTitle("");
        setDescription("");
    }

    return (
        <form className={styles["form"]} onSubmit={handleSubmit}>
            <label htmlFor="task-title" className={styles["label"]}>
                Task title
                <input
                    id="task-title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add a task..."
                    className={styles["input"]}
                />
            </label>

            <label htmlFor="task-description" className={styles["label"]}>
                Description
                <textarea
                    id="task-description"
                    name="task-description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Task's description..."
                    className={styles["textarea"]}
                />
            </label>

            <button type="submit" className={styles["button"]}>
                Add Task
            </button>
        </form>
    );
}
export { TaskForm };
