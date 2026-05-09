import "./NoteCard.css";
function NoteCard({ id, title, content, category, important, onDelete, addToImportant }) {
    const date = new Date().toLocaleDateString("fr-FR");
    return (
        <div className={`note-card ${important ? "important" : ""}`}>
            <h3 className="note-card__title">{title}</h3>
            <p className="note-card__content">{content}</p>
            <span className="note-card__category">{category}</span>
            <div className="meta">
                <small className="note-card__date">Aujourd'hui: {date}</small>
                <span className="important">{important && "⭐"} </span>
            </div>
            <div className="buttons">
                <button className="delete-btn" onClick={() => onDelete(id)}>
                    Delete note
                </button>
                <button className="important-btn" onClick={() => addToImportant(id)}>
                    {important ? "Delete from important" : "Add to important"}
                </button>
            </div>
        </div>
    );
}
export { NoteCard };
