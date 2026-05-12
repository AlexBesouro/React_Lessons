import styles from "./NoteCard.module.css";
function NoteCard({ id, title, content, category, important, onDelete, addToImportant }) {
    const date = new Date().toLocaleDateString("fr-FR");
    const categoryClass = styles[`category-${category}`] || styles["category-Other"];
    return (
        <div
            className={`
            ${styles["note-card"]} 
            ${categoryClass} 
            ${important ? styles.important : ""}
        `}
        >
            <h3 className={styles["note-card__title"]}>{title}</h3>
            <p className={styles["note-card__content"]}>{content}</p>
            <span className={styles["note-card__category"]}>{category}</span>
            <div className={styles["meta"]}>
                <small className={styles["note-card__date"]}>Aujourd'hui: {date}</small>
                <span className={styles["important"]}>{important && "⭐"} </span>
            </div>
            <div className={styles["buttons"]}>
                <button className={styles["delete-btn"]} onClick={() => onDelete(id)}>
                    Delete note
                </button>
                <button className={styles["important-btn"]} onClick={() => addToImportant(id)}>
                    {important ? "Delete from important" : "Add to important"}
                </button>
            </div>
        </div>
    );
}
export { NoteCard };
