import "./Badge.css";
function Badge({ children, status = "en-attente" }) {
    const classes = {
        "en-cours": "badge-cours",
        termine: "badge-termine",
        "en-attente": "badge-attente",
    };
    const emojis = {
        "en-cours": "🔵",
        termine: "✅",
        "en-attente": "⏳",
    };
    const classCss = classes[status] || "badge-attente";
    const emoji = emojis[status] || "⏳";

    return (
        <div className={`badge ${classCss}`}>
            {children || status} {emoji}
        </div>
    );
}

export { Badge };
