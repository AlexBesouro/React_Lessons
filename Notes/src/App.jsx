import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { NoteList } from "./components/NoteList/NoteList";
import { NoteForm } from "./components/NoteForm/NoteForm";

const NOTES = [
    {
        id: 1,
        title: "Apprendre les props React",
        content: "Les props permettent de passer des donnees du parent a l'enfant.",
        category: "Formation",
        important: false,
    },
];

function App() {
    const [notes, setNotes] = useState(NOTES);

    function handleAddNote(form) {
        setNotes([...notes, form]);
    }

    function handleDeleteNote(id) {
        const notesToStay = notes.filter((note) => note.id !== id);
        setNotes(notesToStay);
    }

    function handleImportant(id) {
        const newNotes = notes.map((note) => {
            if (note.id === id) {
                return { ...note, important: !note.important };
            }
            return note;
        });
        console.log(newNotes);
        setNotes(newNotes);
    }

    return (
        <div className="app">
            <Header subtitle={`Total notes: ${notes.length}`} />

            <main className="app-main">
                <NoteForm onAddNote={handleAddNote} />
                <NoteList notes={notes || NOTES} onDelete={handleDeleteNote} addToImportant={handleImportant} />
            </main>
        </div>
    );
}

export { App };
