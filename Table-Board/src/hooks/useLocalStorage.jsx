import { useEffect } from "react";
import { useState } from "react";

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item !== null ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.warn(`Error reading localStorage ${key}: ${error}`);
            return initialValue;
        }
    });
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.warn(`Error reading localStorage ${key}: ${error}`);
        }
    }, [key, storedValue]);
    return [storedValue, setStoredValue];
}

export { useLocalStorage };
