import styles from "./RecipeCard.module.css";

function RecipeCard({ recipe }) {
    const { name, type, ingredients, steps } = recipe;
    return (
        <div className={styles["recipe-card"]}>
            <h2 className={styles["recipe-name"]}>{name}</h2>
            <p className={styles["recipe-type"]}>{type}</p>
            <div className={styles["card-content"]}>
                <div className={styles["recipe-ingredients"]}>
                    <h3>Ingredients</h3>
                    <ul className={styles["ingredient-list"]}>
                        {ingredients.map((ingredient, index) => {
                            return <li key={index}>{ingredient}</li>;
                        })}
                    </ul>
                </div>
                <div className={styles["recipe-steps"]}>
                    <h3>Steps</h3>
                    <ul className={styles["steps-list"]}>
                        {steps.map((step, index) => {
                            return <li key={index}>{step}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export { RecipeCard };
