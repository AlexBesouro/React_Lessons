// import { useState } from "react";
import "./App.css";
// import { Profil } from "./components/Profil/Profil";
// import { Badge } from "./components/Badge/Badge";
// import { ListFilms } from "./components/Films/Films.jsx";
// import { FormulaireNote } from "./components/Form/Form";
// import { Counter } from "./components/Counter/Counter";
import { IdentityCard } from "./components/IdentityCard/IdentityCard";

// const films = [
//     { id: 1, titre: "Inception", annee: 2010, note: 9 },
//     { id: 2, titre: "Interstellar", annee: 2014, note: 8 },
//     { id: 3, titre: "The Dark Knight", annee: 2008, note: 10 },
//     { id: 4, titre: "Tenet", annee: 2020, note: 6 },
// ];

function App() {
    return (
        <div className="app">
            <IdentityCard />
        </div>
    );
}

export default App;
