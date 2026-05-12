// import { useState } from "react";
import "./App.css";
// import { Profil } from "./components/Profil/Profil";
// import { Badge } from "./components/Badge/Badge";
// import { ListFilms } from "./components/Films/Films.jsx";
import { FormulaireNote } from "./components/Form/Form";
// import { Counter } from "./components/Counter/Counter";
// import { IdentityCard } from "./components/IdentityCard/IdentityCard";
import { SearchField } from "./components/Search/Search";

// const films = [
//     { id: 1, titre: "Inception", annee: 2010, note: 9 },
//     { id: 2, titre: "Interstellar", annee: 2014, note: 8 },
//     { id: 3, titre: "The Dark Knight", annee: 2008, note: 10 },
//     { id: 4, titre: "Tenet", annee: 2020, note: 6 },
// ];

function App() {
    // return (
    //     <div className="app">
    //         <IdentityCard />
    //     </div>
    // );

    // React passe automatiquement l'objet "event" en premier argument
    // function handleClick() {
    //     console.log("Note cliquee !");
    // }

    // function handleMouseEnter() {
    //     console.log("Souris sur la note");
    // }

    // return (
    //     <div>
    //         {/* onClick recoit une REFERENCE (sans parentheses) */}
    //         <button onClick={handleClick}>Cliquer ici</button>

    //         {/* onMouseEnter fonctionne de la meme maniere */}
    //         <div onMouseEnter={handleMouseEnter}>Survolez cette zone</div>

    //         {/* On peut aussi ecrire une arrow function directement */}
    //         {/* Utile pour les cas simples */}
    //         <button onClick={() => console.log("Clic!")}>Autre bouton</button>
    //     </div>
    // );

    return <FormulaireNote />;
}

export default App;
