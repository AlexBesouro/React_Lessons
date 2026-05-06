import { NoteCard } from "./NoteCard";
function NoteList() {
    return (
        <section className="note-list">
            <h2>Mes notes(3)</h2>
            <NoteCard />
            <NoteCard />
            <NoteCard />
        </section>
    );
}

export { NoteList };
