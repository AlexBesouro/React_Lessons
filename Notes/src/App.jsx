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
    },
];

function App() {
    const date = Date.now();
    const [notes, setNotes] = useState(NOTES);
    const [form, setForm] = useState({
        title: "",
        content: "",
        category: "",
    });

    function updateForm(newField, value) {
        setForm({ ...form, [newField]: value });
    }

    function addNote() {
        const newNote = { ...form, id: date };
        setNotes([...notes, newNote]);
        setForm({ title: "", content: "", category: "" });
    }

    function deleteNote(id) {
        const notesToStay = notes.filter((note) => note.id !== id);
        setNotes(notesToStay);
    }

    return (
        <div className="app">
            <Header subtitle={`Total notes: ${notes.length}`} />

            <main className="app-main">
                <div className="form">
                    <h2>Add notes</h2>
                    <input
                        type="text"
                        value={form.title}
                        onChange={(e) => updateForm("title", e.target.value)}
                        placeholder="Note's title"
                    />
                    <label htmlFor="content">
                        <textarea
                            id="content"
                            value={form.content}
                            onChange={(e) => updateForm("content", e.target.value)}
                            placeholder="Content of note..."
                        />
                    </label>
                    <select
                        id="category"
                        value={form.category}
                        onChange={(e) => updateForm("category", e.target.value)}
                    >
                        <option value="Other">Other</option>
                        <option value="Learning">Learning</option>
                        <option value="Projects">Projects</option>
                        <option value="Personal">Personal</option>
                    </select>
                    <button onClick={addNote}>Add note</button>
                </div>
                <NoteList notes={notes || NOTES} onDelete={deleteNote} />
            </main>
        </div>
    );
}

export { App };
