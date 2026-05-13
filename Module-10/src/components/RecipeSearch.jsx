import { useEffect, useState } from "react";

const URL = "https://dummyjson.com/recipes/search?q=";
function RecipeSearch() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (query.length <= 2) {
            return;
        }

        async function loadRecipe() {
            try {
                setLoading(true);
                setError(null);
                const res = await fetch(`${URL}${query}`);

                if (!res.ok) throw new Error(`Error: ${res.status}`);

                const data = await res.json();
                setResults(data.recipes || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadRecipe();
    }, [query]);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            {query.trim().length < 3 && <p>Enter at least 3 characters.</p>}

            {!loading && !error && query.trim().length >= 3 && results.length === 0 && (
                <p>Nothing found « {query} ».</p>
            )}

            <ul>
                {results.map((r) => (
                    <li key={r.id}>
                        <strong>{r.name}</strong> — {r.cookTimeMinutes} min of cooking
                    </li>
                ))}
            </ul>
        </div>
    );
}

export { RecipeSearch };
