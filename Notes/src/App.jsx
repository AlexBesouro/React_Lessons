import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { NoteList } from "./components/NoteList/NoteList";

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
    const [form, setForm] = useState({
        title: "",
        content: "",
        category: "",
        important: false,
    });

    function updateForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    function handleAddNote() {
        const date = Date.now();
        const newNote = { ...form, id: date };
        setNotes([...notes, newNote]);
        setForm({ title: "", content: "", category: "", important: false });
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
                <div className="form">
                    <h2>Add notes</h2>
                    <label htmlFor="titre">
                        <input
                            id="titre"
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={updateForm}
                            placeholder="Note's title"
                        />
                    </label>
                    <label htmlFor="content">
                        <textarea
                            name="content"
                            id="content"
                            value={form.content}
                            onChange={updateForm}
                            placeholder="Content of note..."
                        />
                    </label>
                    <label htmlFor="category">
                        <select id="category" name="category" value={form.category} onChange={updateForm}>
                            <option value="Other">Other</option>
                            <option value="Learning">Learning</option>
                            <option value="Projects">Projects</option>
                            <option value="Personal">Personal</option>
                        </select>
                    </label>
                    <button onClick={handleAddNote}>Add note</button>
                </div>
                <NoteList notes={notes || NOTES} onDelete={handleDeleteNote} addToImportant={handleImportant} />
            </main>
        </div>
    );
}

export { App };
