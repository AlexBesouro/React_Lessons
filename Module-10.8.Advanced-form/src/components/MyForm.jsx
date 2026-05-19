import { useState } from "react";
import styles from "./MyForm.module.css";
function MyForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        message: false,
    });
    const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
    const [serverError, setServerError] = useState("");

    function validateField(name, value) {
        if (name === "name") {
            if (!value.trim()) return "User's name is required.";
            if (value.length < 3) return "User's name should be at least 3 characters long.";
        }
        if (name === "email") {
            if (!value.trim()) return "User's email is required.";
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) return "Invalid email format";
        }
        if (name === "message") {
            if (!value.trim()) return "User's message is required.";
            if (value.length < 10) return "User's message should be at least 10 characters long.";
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
    async function handleSubmit(event) {
        event.preventDefault();
        const nameError = validateField("name", formData.name);
        const emailError = validateField("email", formData.email);
        const messageError = validateField("message", formData.message);
        if (nameError || emailError || messageError) {
            setTouched({ name: true, email: true, message: true });
            setErrors({ name: nameError, email: emailError, message: messageError });
            return;
        }
        // imatiting post request to server
        setStatus("submitting");
        setServerError("");
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!response.ok) throw new Error(`Something wet wrong ${response.status}`);
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTouched({ name: false, email: false, message: false });
        } catch (error) {
            setStatus("error");
            setServerError(error.message);
        }
    }
    return (
        <div className={styles["form-container"]}>
            <h2 className={styles["title"]}>Form</h2>
            {status === "success" && (
                <div role="status" className={styles["alert-success"]}>
                    Form is successfuly submitted
                </div>
            )}
            {status === "error" && (
                <div role="alert" className={styles["alert-error"]}>
                    Sending error {serverError}
                </div>
            )}
            <form onSubmit={handleSubmit} noValidate>
                <div className={styles["form-group"]}>
                    <label htmlFor="name">
                        User's name <span aria-hidden>*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        aria-required
                        aria-invalid={touched.email && !!errors.email ? "true" : "false"}
                        aria-describedby={touched.email && errors.email ? "name-error" : undefined}
                    />
                    {touched.email && errors.email && (
                        <p id="name-error" className={styles["error-text"]}>
                            {errors.name}
                        </p>
                    )}
                </div>
                <div className={styles["form-group"]}>
                    <label htmlFor="email">
                        User's email <span aria-hidden>*</span>
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        aria-required
                        aria-invalid={touched.email && !!errors.email ? "true" : "false"}
                        aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                    />
                    {touched.email && errors.email && (
                        <p id="email-error" className={styles["error-text"]}>
                            {errors.email}
                        </p>
                    )}
                </div>
                <div className={styles["form-group"]}>
                    <label htmlFor="message">
                        Message <span aria-hidden>*</span>
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        aria-required
                        aria-invalid={touched.message && !!errors.message ? "true" : "false"}
                        aria-describedby={touched.message && errors.message ? "message-error" : undefined}
                    />
                    {touched.message && errors.message && (
                        <p id="message-error" className={styles["error-text"]}>
                            {errors.message}
                        </p>
                    )}
                </div>
                <button type="submit" disabled={status === "submitting"} className={styles["submit-btn"]}>
                    {status === "submitting" ? (
                        <>
                            <span className={styles["spinner"]} aria-hidden="true"></span>
                            Sending…
                        </>
                    ) : (
                        "Send"
                    )}
                </button>
            </form>
        </div>
    );
}

export { MyForm };
