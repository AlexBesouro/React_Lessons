// import { useState } from "react";
import "./App.css";
import { Stats } from "./components/Stats";
import { Profil } from "./components/Profil";
function Bienvenue() {
    const date = new Date().toLocaleDateString("fr-FR");
    const visites = Math.floor(Math.random() * 100);
    return (
        <>
            <h2>Bienvenue dans mon application !</h2>
            <p>Aujourd'hui: {date}</p>
            <p>Nombre de visites: {visites}</p>
        </>
    );
}

function App() {
    return (
        <div class="class-app">
            <Bienvenue />
            <Profil />
            <Stats />
        </div>
    );
}

export default App;
