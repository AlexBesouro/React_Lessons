import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    function login(userName) {
        setUser({ name: userName });
    }
    function logout() {
        setUser(null);
    }
    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth should be used in <AuthProvider>");
    }
    return context;
}

export { AuthProvider, useAuth };
