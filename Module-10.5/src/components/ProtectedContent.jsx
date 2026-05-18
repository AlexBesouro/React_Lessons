import { useAuth } from "../context/AuthContext";

function ProtectedContent() {
    const { user } = useAuth();

    if (!user) {
        return <div>🔒 Connectez-vous pour voir ce contenu.</div>;
    }

    return (
        <div>
            <h2>Contenu protégé</h2>
            <p>Bravo {user.name}, vous avez accès à ce contenu réservé !</p>
            <ul>
                <li>Statistiques avancées</li>
                <li>Paramètres du compte</li>
                <li>Historique des actions</li>
            </ul>
        </div>
    );
}

export { ProtectedContent };
