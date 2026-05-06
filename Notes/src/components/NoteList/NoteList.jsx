import { NoteCard } from "../NoteCard/NoteCard";
import "./NoteList.css";
function NoteList({ notes }) {
    return (
        <section className="note-list">
            <h2>Mes notes({notes.length})</h2>
            <div className="notes-grid">
                {notes.map((note) => {
                    return (
                        <NoteCard key={note.id} title={note.title} content={note.content} category={note.category} />
                    );
                })}
            </div>
        </section>
    );
}

export { NoteList };
