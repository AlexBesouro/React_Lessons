function ListFilms({ films }) {
    return (
        <div className="film-list">
            {films.map(({ id, ...rest }) => {
                return <Film key={id} {...rest} />;
            })}
        </div>
    );
}

function Film({ titre, annee, note }) {
    return (
        <div className="film">
            <h3>{titre}</h3>
            <p>Year - {annee}</p>
            <p>
                Note - {note}
                {note > 9 && " Chef-d'oeuvre !"}
            </p>
        </div>
    );
}

export { ListFilms };
