import { useState } from "react";
import { useTaskContext } from "../hooks/useTaskContext";
import styles from "./TaskForm.module.css";

function TaskForm() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });
    const [touched, setTouched] = useState({
        title: false,
        description: false,
    });
    const [errors, setErrors] = useState({
        title: "",
        description: "",
    });
    const { dispatch } = useTaskContext();
    const [status, setStatus] = useState("idle");
    function validateField(name, value) {
        if (name === "title") {
            if (!value.trim()) return "Task's title is required.";
            if (value.length < 3) return "Task's title should be at least 3 characters long.";
        }
        if (name === "description") {
            if (!value.trim()) return "Task's description is required.";
            if (value.length < 10) return "Task's description should be at least 10 characters";
        }
        return ""; // No errors
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (touched[name]) {
            const error = validateField(name, value);
            setErrors((prev) => ({ ...prev, [name]: error }));
        }
    }
    function handleBlur(event) {
        const { name, value } = event.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const titleError = validateField("title", formData.title);
        const descriptionError = validateField("description", formData.description);
        if (titleError || descriptionError) {
            setTouched({ title: true, description: true });
            setErrors({ title: titleError, description: descriptionError });
            return;
        }
        setStatus("submitting");
        await new Promise((resolve) => setTimeout(resolve, 1500));
        dispatch({ type: "ADD_TASK", payload: { title: formData.title, description: formData.description } });
        setStatus("success");
        setFormData({ title: "", description: "" });
        setTouched({ title: false, description: false });
    }

    return (
        <form className={styles["form"]} onSubmit={handleSubmit}>
            <label htmlFor="task-title" className={styles["label"]}>
                Task title <span aria-hidden>*</span>{" "}
            </label>
            <input
                id="task-title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="Add a task..."
                className={styles["input"]}
                onBlur={handleBlur}
                required
                aria-required
                aria-invalid={touched.title && !!errors.title ? "true" : "false"}
                aria-describedby={touched.title && errors.title ? "title-error" : undefined}
            />
            {touched.title && errors.title && (
                <p id="title-error" className={styles["error-text"]}>
                    {errors.title}
                </p>
            )}

            <label htmlFor="task-description" className={styles["label"]}>
                Description <span aria-hidden>*</span>
            </label>
            <textarea
                id="task-description"
                name="description"
                rows="5"
                value={formData.description}
                onChange={handleChange}
                placeholder="Task's description..."
                className={styles["textarea"]}
                onBlur={handleBlur}
                required
                aria-required
                aria-invalid={touched.description && !!errors.description ? "true" : "false"}
                aria-describedby={touched.description && errors.description ? "description-error" : undefined}
            />
            {touched.description && errors.description && (
                <p id="description-error" className={styles["error-text"]}>
                    {errors.description}
                </p>
            )}
            <button type="submit" disabled={status === "submitting"} className={styles["button"]}>
                {status === "submitting" ? (
                    <>
                        <span className={styles["spinner"]} aria-hidden="true"></span>
                        Adding…
                    </>
                ) : (
                    "Add task"
                )}
            </button>
        </form>
    );
}
export { TaskForm };
