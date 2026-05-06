function NoteCard() {
    const date = new Date().toLocaleDateString("fr-FR");
    return (
        <div className="note-card">
            <h3>Apprendre les composants React</h3>
            <p>Les composants sont des blocs de construction independants et reutilisables.</p>
            <span className="note-card__category">Formation</span>
            <small>Aujourd'hui: {date}</small>
        </div>
    );
}
export { NoteCard };
