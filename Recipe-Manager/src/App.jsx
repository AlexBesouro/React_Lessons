import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { RecipeCardList } from "./components/RecipeCardList";
import { SearchBar } from "./components/SearchBar";
import { SearchButtons } from "./components/SearchButtons";
import { Modal } from "./components/Modal";
import { RecipeForm } from "./components/RecipeForm";

const RECIPES = [
    {
        id: 1,
        name: "Classic Omelette",
        type: "Main Course",
        ingredients: ["Eggs", "Milk", "Butter", "Salt"],
        steps: ["Whisk eggs with milk and salt", "Heat the pan with butter", "Cook until firm"],
    },

    {
        id: 2,
        name: "Guacamole",
        type: "Appetizer",
        ingredients: ["Avocado", "Lime juice", "Red onion", "Cilantro"],
        steps: ["Mash the avocados", "Finely dice the onion and cilantro", "Mix all ingredients together"],
    },
];

function App() {
    const [recipes, setRecipes] = useState(RECIPES);
    const [inputValue, setInputValue] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [searchType, setSearchType] = useState("All");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSearchSubmit = () => {
        setSearchValue(inputValue);
        setSearchType("All");
    };

    const handleTypeSearch = (type) => {
        setSearchType(type);
        setSearchValue("");
        setInputValue("");
    };

    const filteredRecipes = recipes.filter((recipe) => {
        if (searchType === "All" && searchValue === "") return true;
        if (searchValue !== "") {
            return recipe.name.toLowerCase().includes(searchValue.toLowerCase());
        }
        return recipe.type === searchType;
    });

    function handleAddRecipe(recipe) {
        setRecipes([...recipes, recipe]);
        closeModal();
    }

    return (
        <div className="app">
            <Header />
            <main className="main">
                <SearchBar searchValue={inputValue} onChange={setInputValue} onSubmit={handleSearchSubmit} />
                <SearchButtons onSearchType={handleTypeSearch} activeType={searchType} />
                <button className="add-recipe-button" onClick={openModal}>
                    Add New Recipe
                </button>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <RecipeForm onAddRecipe={handleAddRecipe} />
                </Modal>
                <RecipeCardList recipeArray={filteredRecipes} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
