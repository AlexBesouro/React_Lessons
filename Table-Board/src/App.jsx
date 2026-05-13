import { useEffect, useState } from "react";
import { WeatherWidget } from "./components/WeatherWidget";
import "./App.css";

function App() {
    return (
        <div className="app">
            <WeatherWidget latitude={48.8566} longitude={2.3522} />
        </div>
    );
}

export default App;
