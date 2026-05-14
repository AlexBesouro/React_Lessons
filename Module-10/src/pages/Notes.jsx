import styles from "./Notes.module.css";

function Notes() {
    const notes = [
        { id: 1, title: "Project Idea", content: "Create an interactive dashboard with React", date: "2024-05-10" },
        { id: 2, title: "Reminder", content: "Update CSS variables for theme", date: "2024-05-11" },
        { id: 3, title: "To Learn", content: "Study React Router and CSS modules", date: "2024-05-12" },
    ];

    return (
        <div className={styles.notes}>
            <div className={styles["notes-header"]}>
                <h2>My Notes</h2>
                <span className={styles["notes-count"]}>{notes.length} notes</span>
            </div>
            <div className={styles["notes-list"]}>
                {notes.length > 0 ? (
                    notes.map((note) => (
                        <div key={note.id} className={styles["note-item"]}>
                            <h3>{note.title}</h3>
                            <p>{note.content}</p>
                            <div className={styles["note-item-meta"]}>
                                <span>{note.date}</span>
                                <span>Edit</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className={styles["empty-state"]}>
                        <p>You have no notes. Create a new one!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Notes;
