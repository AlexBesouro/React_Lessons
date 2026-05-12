import styles from "./SearchBar.module.css";

function SearchBar({ searchValue, onChange, onSubmit }) {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form className={styles["search-form"]} onSubmit={handleSubmit}>
            <label htmlFor="search" Search the recipe>
                <input
                    name="search"
                    id="search"
                    type="text"
                    placeholder="Type name of recipe..."
                    className={styles["search-input"]}
                    value={searchValue}
                    onChange={handleChange}
                />
            </label>
            <button type="submit" className={styles["search-button"]}>
                Search
            </button>
        </form>
    );
}

export { SearchBar };
