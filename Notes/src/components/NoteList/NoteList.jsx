import { NoteCard } from "../NoteCard/NoteCard";
import "./NoteList.css";
function NoteList({ notes, onDelete }) {
    if (notes.length === 0) {
        return (
            <section className="note-list">
                <h2>Aucune note pour le moment. Creez votre premiere note !</h2>
            </section>
        );
    }

    return (
        <section className="note-list">
            <h2>Mes notes({notes.length})</h2>
            <div className="notes-grid">
                {notes.map((note) => {
                    return <NoteCard key={note.id} {...note} onDelete={onDelete} />;
                })}
            </div>
        </section>
    );
}

export { NoteList };
