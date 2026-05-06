import "./Profil.css";
function Profil({ nom, role, ville }) {
    return (
        <article className="profil-card">
            <h3 className="profil-card__name">{nom}</h3>
            <p className="profil-card__role">{role}</p>
            <p className="profil-card__city">{ville}</p>
        </article>
    );
}
export { Profil };
