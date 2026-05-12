import styles from "./RecipeCardList.module.css";
import { RecipeCard } from "./RecipeCard";

function RecipeCardList({ recipeArray }) {
    return (
        <section className={styles["cards"]}>
            <h2>Recipes</h2>
            <div className={styles["card-grid"]}>
                {recipeArray.map((recipe) => {
                    return <RecipeCard key={recipe.id} recipe={recipe} />;
                })}
            </div>
        </section>
    );
}

export { RecipeCardList };
