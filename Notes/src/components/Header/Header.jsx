import "./Header.css";
function Header({ subtitle = "" }) {
    return (
        <header className="app-header">
            <h1>Mon carnet de notes</h1>
            <p className="app-subtitle">{subtitle}</p>
        </header>
    );
}

export { Header };
