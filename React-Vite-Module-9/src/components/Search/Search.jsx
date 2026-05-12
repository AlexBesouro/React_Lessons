import { useState } from "react";
import "./Search.css";

function SearchField() {
    const [search, setSearch] = useState("");

    function handleInput(event) {
        setSearch(event.target.value);
    }

    return (
        <div className="search-container">
            <div className="search-box">
                <label htmlFor="search" className="search-label">
                    Search notes
                </label>
                <input
                    type="text"
                    name="search"
                    id="search"
                    className="search-input"
                    onChange={handleInput}
                    value={search}
                    placeholder="Type to filter..."
                />
            </div>
            <div className="search-info">
                <p>
                    Looking for: <span>{search || "..."}</span>
                </p>
                <p>
                    Length: <strong>{search.length}</strong> / 50
                </p>
            </div>
        </div>
    );
}
export { SearchField };
