import { useState } from "react";
import "./NoteForm.css";

function NoteForm({ onAddNote }) {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        category: "",
        important: false,
    });
    const [errors, setErrors] = useState({});

    function handleFormChange(event) {
        const { name, value, type, checked } = event.target;
        const finalValue = type === "checkbox" ? checked : value;
        setFormData((prevData) => ({ ...prevData, [name]: finalValue }));

        if (errors[name]) {
            setErrors((prevError) => ({ ...prevError, [name]: "" }));
        }
    }

    function validationForm() {
        const newErrors = {};

        if (!formData.title.trim() || formData.title.length > 50) {
            newErrors.title = "Please enter a valid title.";
        }
        if (!formData.content.trim()) {
            newErrors.content = "Please enter some content.";
        }
        return newErrors;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const errorsDetected = validationForm();
        if (Object.keys(errorsDetected).length > 0) {
            setErrors(errorsDetected);
            return;
        }
        const newNote = {
            id: Date.now(),
            title: formData.title.trim(),
            content: formData.content.trim(),
            category: formData.category,
            important: formData.important,
        };
        onAddNote(newNote);
        setFormData({
            title: "",
            content: "",
            category: "",
            important: false,
        });
        setErrors({});
    }
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <h2>Add notes</h2>
                <label htmlFor="titre">
                    <input
                        id="titre"
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleFormChange}
                        placeholder="Note's title"
                        maxLength={50}
                    />
                    {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
                </label>
                <label htmlFor="content">
                    <textarea
                        name="content"
                        id="content"
                        value={formData.content}
                        onChange={handleFormChange}
                        placeholder="Content of note..."
                    />
                </label>
                <label htmlFor="category">
                    <select id="category" name="category" value={formData.category} onChange={handleFormChange}>
                        <option value="Other">Other</option>
                        <option value="Learning">Learning</option>
                        <option value="Projects">Projects</option>
                        <option value="Personal">Personal</option>
                    </select>
                </label>
                <label htmlFor="checkbox">
                    <input
                        type="checkbox"
                        name="important"
                        id="checkbox"
                        checked={formData.important}
                        onChange={handleFormChange}
                    />
                    Important?
                </label>
                <button type="submit">Add note</button>
            </form>
        </div>
    );
}
export { NoteForm };
