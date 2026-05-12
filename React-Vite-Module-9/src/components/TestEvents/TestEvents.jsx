import "./Test.Events.css";

function ItemTache({ id, texte, faite, onMarquerFaite }) {
    return (
        <li style={{ textDecoration: faite ? "line-through" : "none" }}>
            {texte}

            {!faite && <button onClick={() => onMarquerFaite(id)}>Fait ✓</button>}
        </li>
    );
}
