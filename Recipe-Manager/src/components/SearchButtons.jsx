import styles from "./SearchButtons.module.css";

function SearchButtons({ onSearchType, activeType }) {
    const categories = ["All", "Appetizer", "Main Course", "Dessert", "Salad"];

    return (
        <div className={styles["buttons-grid"]}>
            {categories.map((category) => {
                return (
                    <button
                        key={category}
                        className={`${styles["type-btn"]} ${activeType === category ? styles["active"] : ""}`}
                        onClick={() => onSearchType(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
}
export { SearchButtons };
