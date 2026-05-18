import { useState } from "react";
import { useAuth } from "../context/AuthContext";
function LoginForm() {
    const { user, login } = useAuth();
    const [userName, setUserName] = useState("");
    if (user) return null;
    function handleSubmit(e) {
        e.preventDefault();
        if (userName.trim()) {
            login(userName.trim());
            setUserName("");
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Votre nom d'utilisateur"
                />
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
}
export { LoginForm };
