import { useAuth } from "../context/AuthContext";
function UserInfo() {
    const { user, logout } = useAuth();
    if (!user) {
        return <p>Vous n'êtes pas connecté.</p>;
    }
    return (
        <div>
            <p>
                Bienvenue, <strong>{user.name}</strong> !
            </p>
            <button onClick={logout}>Se déconnecter</button>
        </div>
    );
}
export { UserInfo };
