import { DynamicTitle } from "./components/DynamicTitle";
import { Chronometr } from "./components/Chronometr";
import { RandomJoke } from "./components/RandomJoke";
import { RecipeSearch } from "./components/RecipeSearch";
import "./App.css";

function App() {
    return (
        <main>
            <DynamicTitle />
            <Chronometr />
            <br />
            <RandomJoke />
            <br />
            <RecipeSearch />
        </main>
    );
}

export default App;
