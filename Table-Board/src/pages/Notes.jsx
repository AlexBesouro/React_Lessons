import styles from "./Notes.module.css";

function Notes() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Mes notes</h2>
            <p className={styles.description}>Les notes rapides seront ajoutées dans les prochaines fiches.</p>

            <div className={styles.notesGrid}>
                {/* Карточка заметки */}
                <article className={styles.noteCard}>
                    <header className={styles.noteHeader}>Note d'exemple</header>
                    <p className={styles.noteContent}>
                        React Router transforme une application React en SPA multi-pages. C'est magique ! ✨
                    </p>
                </article>

                {/* Ты можешь добавить вторую карточку для теста */}
                <article className={styles.noteCard}>
                    <header className={styles.noteHeader}>Rappel</header>
                    <p className={styles.noteContent}>
                        N'oublie pas d'utiliser <strong>useState</strong> pour les données qui changent dans le temps.
                    </p>
                </article>
            </div>
        </div>
    );
}

export { Notes };
