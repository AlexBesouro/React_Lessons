import "./App.css";
import { Header } from "./components/Header/Header";
import { NoteList } from "./components/NoteList/NoteList";

const notes = [
    {
        id: 1,
        title: "Apprendre les props React",
        content: "Les props permettent de passer des donnees du parent a l'enfant.",
        category: "Formation",
    },
    {
        id: 2,
        title: "Idee d'application",
        content: "Creer un gestionnaire de recettes avec React et une API.",
        category: "Projets",
    },
    {
        id: 3,
        title: "Courses de la semaine",
        content: "Lait, oeufs, pain, fromage, pommes.",
        category: "Personnel",
    },
];

function App() {
    return (
        <div className="app">
            <Header subtitle="My learning project" />
            <main className="app-main">
                <NoteList notes={notes} />
            </main>
        </div>
    );
}

export { App };
