import { useEffect } from "react";
import { useState } from "react";

function useFetch(URL) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (!URL) return;
        let canceled = false;
        async function loadData() {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const loadedData = await response.json();
                if (canceled) return;
                setData(loadedData);
            } catch (err) {
                if (canceled) return;
                setError(err.message);
            } finally {
                if (!canceled) {
                    setLoading(false);
                }
            }
        }
        loadData();
        return () => {
            canceled = true;
        };
    }, [URL]);
    return { data, loading, error };
}
export { useFetch };
