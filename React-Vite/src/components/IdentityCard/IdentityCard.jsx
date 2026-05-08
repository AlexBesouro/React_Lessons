import { useState } from "react";
import "./IdentityCard.css";

function IdentityCard() {
    const [card, setCard] = useState({
        prenom: "",
        age: 0,
        abonne: false,
    });

    function updateCard(newField, value) {
        setCard({ ...card, [newField]: value });
    }
    function saveCard() {
        setCard({
            prenom: "",
            age: 0,
            abonne: false,
        });
    }

    return (
        <div className="identity-card">
            <h2>New Card</h2>
            <input
                type="text"
                value={card.prenom}
                onChange={(e) => updateCard("prenom", e.target.value)}
                placeholder="Your name"
            />
            <input
                type="number"
                value={card.age}
                min={18}
                max={65}
                step={1}
                onChange={(e) => updateCard("age", e.target.value)}
                placeholder="Age should be between 18 and 65"
            />
            <label htmlFor="is-abonne">
                <input
                    type="checkbox"
                    checked={card.abonne}
                    onChange={(e) => updateCard("abonne", e.target.checked)}
                    id="is-abonne"
                />
                Abonne
            </label>
            <div className="apercu">
                <h2>{card.prenom || "No name"}</h2>
                <p>{card.age || "No age"}</p>
                <span>Abonne: {card.abonne}</span>
                {card.abonne && <strong> ⭐ Subscribed</strong>}
            </div>
            <button onClick={saveCard}>Save</button>
        </div>
    );
}

export { IdentityCard };
