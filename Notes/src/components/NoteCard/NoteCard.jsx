import "./NoteCard.css";
function NoteCard({ title, content, category }) {
    const date = new Date().toLocaleDateString("fr-FR");
    return (
        <div className="note-card">
            <h3 className="note-card__title">{title}</h3>
            <p className="note-card__content">{content}</p>
            <span className="note-card__category">{category}</span>
            <small className="note-card__date">Aujourd'hui: {date}</small>
        </div>
    );
}
export { NoteCard };
