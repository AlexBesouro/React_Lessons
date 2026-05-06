import "./App.css";
import { Header } from "./components/Header";
import { NoteList } from "./components/NoteList";
function App() {
    return (
        <div className="app">
            <Header></Header>
            <main className="app-main">
                <NoteList></NoteList>
            </main>
        </div>
    );
}

export { App };
