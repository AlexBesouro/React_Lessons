import { useState } from "react";
import "./Form.css";

function FormulaireNote() {
    const [note, setNote] = useState({
        titre: "",
        contenu: "",
        categorie: "Divers",
        estImportante: false,
    });

    function mettreAJourNote(nomChamp, valeur) {
        setNote({
            ...note,
            [nomChamp]: valeur,
        });
    }

    function soumettreNote() {
        console.log("Note soumise :", note);
        setNote({ titre: "", contenu: "", categorie: "Divers", estImportante: false });
    }

    return (
        <div>
            <h2>Nouvelle note</h2>

            <input
                type="text"
                value={note.titre}
                onChange={(e) => mettreAJourNote("titre", e.target.value)}
                placeholder="Titre de la note"
            />

            <textarea
                value={note.contenu}
                onChange={(e) => mettreAJourNote("contenu", e.target.value)}
                placeholder="Contenu de la note..."
            />

            <select value={note.categorie} onChange={(e) => mettreAJourNote("categorie", e.target.value)}>
                <option value="Divers">Divers</option>
                <option value="Formation">Formation</option>
                <option value="Projets">Projets</option>
                <option value="Personnel">Personnel</option>
            </select>

            <label>
                <input
                    type="checkbox"
                    checked={note.estImportante}
                    onChange={(e) => mettreAJourNote("estImportante", e.target.checked)}
                />
                Note importante
            </label>

            <div className="apercu">
                <h3>{note.titre || "Sans titre"}</h3>
                <p>{note.contenu || "Aucun contenu"}</p>
                <span>Categorie : {note.categorie}</span>
                {note.estImportante && <strong> ⭐ Importante</strong>}
            </div>

            <button onClick={soumettreNote}>Enregistrer la note</button>
        </div>
    );
}
export { FormulaireNote };
