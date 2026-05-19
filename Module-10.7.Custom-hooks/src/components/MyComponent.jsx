import { useToggle } from "../hooks/useToggle";
import { useWindowSize } from "../hooks/useWindowSize";

function MyComponent() {
    const [visible, toggle] = useToggle(false);
    const { width, height } = useWindowSize();
    let breakpoint = "mobile";
    if (width >= 1024) breakpoint = "desktop";
    else if (width >= 768) breakpoint = "tablette";
    return (
        <div>
            <button onClick={toggle}>{visible ? "Hide" : "Show"}</button>
            {visible && <p>Context is shown !</p>}
            <p>
                Window size: {width} X {height}
            </p>
            <p>
                Largeur : <strong>{width}px</strong>
            </p>
            <p>
                Hauteur : <strong>{height}px</strong>
            </p>
            <p>
                Breakpoint : <strong>{breakpoint}</strong>
            </p>
            <p style={{ color: "#64748b", fontSize: "14px" }}>
                Redimensionnez la fenêtre pour voir les valeurs changer en temps réel.
            </p>
        </div>
    );
}

export { MyComponent };
