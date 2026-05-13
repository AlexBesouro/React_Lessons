import { useEffect, useState } from "react";

const URL = "https://official-joke-api.appspot.com/random_joke";
function RandomJoke() {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [updateJoke, setUpdateJoke] = useState();

    useEffect(() => {
        async function loadJoke() {
            try {
                setLoading(true);
                setError(null);
                const res = await fetch(URL);
                if (!res.ok) {
                    throw new Error(`Error ${res.status}`);
                }
                const data = await res.json();
                setJoke(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        loadJoke();
    }, [updateJoke]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {joke && (
                <p>
                    {joke.setup} <strong>{joke.punchline}</strong>
                </p>
            )}
            <button onClick={setUpdateJoke} disabled={loading}>
                New joke
            </button>
        </div>
    );
}

export { RandomJoke };
