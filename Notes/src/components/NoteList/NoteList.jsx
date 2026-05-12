import { NoteCard } from "../NoteCard/NoteCard";
import styles from "./NoteList.module.css";
function NoteList({ notes, onDelete, addToImportant }) {
    if (notes.length === 0) {
        return (
            <section className={styles["note-list"]}>
                <h2>Aucune note pour le moment. Creez votre premiere note !</h2>
            </section>
        );
    }

    return (
        <section className={styles["note-list"]}>
            <h2>Mes notes({notes.length})</h2>
            <div className={styles["notes-grid"]}>
                {notes.map((note) => {
                    return <NoteCard key={note.id} {...note} onDelete={onDelete} addToImportant={addToImportant} />;
                })}
            </div>
        </section>
    );
}

export { NoteList };
