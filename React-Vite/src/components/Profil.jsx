function Profil() {
    const langages = ["HTML", "CSS", "JavaScript", "React"];
    return (
        <article>
            <h3>Alex</h3>
            <p>Web Dev</p>
            <p>Langues: {langages.join(", ")}</p>
        </article>
    );
}
export { Profil };
