import { useState } from "react";
import styles from "./RecipeForm.module.css";

function RecipeForm({ onAddRecipe }) {
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        ingredients: [],
        steps: [],
    });
    const [errors, setErrors] = useState({});
    const [currentIngredient, setCurrentIngredient] = useState("");
    const [currentStep, setCurrentStep] = useState("");

    const addItem = (field, value, setter) => {
        if (!value.trim()) return;
        setFormData((prev) => ({
            ...prev,
            [field]: [...prev[field], value.trim()],
        }));
        setter("");
    };

    const removeItem = (field, index) => {
        setFormData((prev) => ({
            ...prev,
            [field]: prev[field].filter((_, i) => i !== index),
        }));
    };

    function handleFormChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    function validationForm() {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = "Please enter a name of the recipe.";
        }
        if (!formData.type.trim()) {
            newErrors.type = "Please enter a type of the recipe.";
        }
        if (formData.ingredients.length === 0) {
            newErrors.ingredients = "Please add at least one ingredient.";
        }
        if (formData.steps.length < 3) {
            newErrors.steps = "Please add at least 3 steps of cooking.";
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
        const newRecipe = {
            id: Date.now(),
            name: formData.name.trim(),
            type: formData.type.trim(),
            ingredients: formData.ingredients,
            steps: formData.steps,
        };
        onAddRecipe(newRecipe);
        setFormData({ name: "", type: "", ingredients: [], steps: [] });
        setErrors({});
    }
    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
                <h2>Add notes</h2>
                <label htmlFor="name">
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Recipe's name..."
                        maxLength={50}
                    />
                    {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                </label>
                <label htmlFor="type">
                    <textarea
                        name="type"
                        id="type"
                        value={formData.type}
                        onChange={handleFormChange}
                        placeholder="Recipe's type..."
                    />
                    {errors.type && <p style={{ color: "red" }}>{errors.type}</p>}
                </label>
                <div className={styles.section}>
                    <h3>Ingredients</h3>
                    <div className={styles.inputGroup}>
                        <input
                            value={currentIngredient}
                            onChange={(e) => setCurrentIngredient(e.target.value)}
                            placeholder="Add ingredient..."
                        />
                        {errors.ingredients && <p style={{ color: "red" }}>{errors.ingredients}</p>}
                        <button
                            type="button"
                            onClick={() => addItem("ingredients", currentIngredient, setCurrentIngredient)}
                        >
                            +
                        </button>
                    </div>
                    <ul className={styles.list}>
                        {formData.ingredients.map((ing, index) => (
                            <li key={index}>
                                {ing} <span onClick={() => removeItem("ingredients", index)}>&times;</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.section}>
                    <h3>Steps</h3>
                    <div className={styles.inputGroup}>
                        <input
                            value={currentStep}
                            onChange={(e) => setCurrentStep(e.target.value)}
                            placeholder="Add step..."
                        />
                        {errors.steps && <p style={{ color: "red" }}>{errors.steps}</p>}
                        <button type="button" onClick={() => addItem("steps", currentStep, setCurrentStep)}>
                            +
                        </button>
                    </div>
                    <ol className={styles.list}>
                        {formData.steps.map((step, index) => (
                            <li key={index}>
                                {step} <span onClick={() => removeItem("steps", index)}>&times;</span>
                            </li>
                        ))}
                    </ol>
                </div>
                <button type="submit">Add note</button>
            </form>
        </div>
    );
}

export { RecipeForm };
