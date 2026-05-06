// import { useState } from "react";
import "./App.css";
import { Profil } from "./components/Profil/Profil";
import { Badge } from "./components/Badge/Badge";

function App() {
    return (
        <div className="app">
            <Profil nom="Alice Martin" role="Developpeur" ville="Paris" />
            <Profil nom="Bob Dupont" role="Designer" ville="Lyon" />
            <Profil nom="Clara Petit" role="Chef de projet" ville="Bordeaux" />
            <Badge status="en-cours">Traitement en cours</Badge>
            <Badge status="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, consectetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, consectetur.</p>
            </Badge>
        </div>
    );
}

export default App;
