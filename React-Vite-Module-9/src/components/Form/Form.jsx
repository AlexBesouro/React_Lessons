import { useState } from "react";
import "./Form.css";

function FormulaireNote() {
    const [note, setNote] = useState({
        titre: "",
        contenu: "",
        categorie: "Divers",
        estImportante: false,
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        const finalValue = type === "checkbox" ? checked : value;
        setNote({
            ...note,
            [name]: finalValue,
        });
    }
    function handleSubmit(event) {
        event.preventDefault();
        if (note.titre.trim() === "" || note.contenu.trim() === "") {
            alert("Veuillez remplir les champs obligatoires");
            return;
        }
        alert(`Message envoye de la part de Alex !`);
        setNote({ titre: "", contenu: "", categorie: "Divers", estImportante: false });
    }

    return (
        <div>
            <h2>Nouvelle note</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="titre"
                    type="text"
                    value={note.titre}
                    onChange={handleChange}
                    placeholder="Titre de la note"
                />

                <textarea
                    name="contenu"
                    value={note.contenu}
                    onChange={handleChange}
                    placeholder="Contenu de la note..."
                />

                <select name="categorie" value={note.categorie} onChange={handleChange}>
                    <option value="Divers">Divers</option>
                    <option value="Formation">Formation</option>
                    <option value="Projets">Projets</option>
                    <option value="Personnel">Personnel</option>
                </select>

                <label>
                    <input name="estImportante" type="checkbox" checked={note.estImportante} onChange={handleChange} />
                    Note importante
                </label>
                <button type="submit">Enregistrer la note</button>
            </form>
            <div className="apercu">
                <h3>{note.titre}</h3>
                <p>{note.contenu || "Aucun contenu"}</p>
                <span>Categorie : {note.categorie}</span>
                {note.estImportante && <strong> ⭐ Importante</strong>}
            </div>
        </div>
    );
}
export { FormulaireNote };
