import styles from "./Modal.module.css";
import { useEffect } from "react";

function Modal({ isOpen, onClose, children }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles["overlay"]} onClick={handleOverlayClick}>
            <div className={styles["modal"]}>
                <button className={styles["closeButton"]} onClick={onClose}>
                    &times;
                </button>
                <div className={styles["content"]}>{children}</div>
            </div>
        </div>
    );
}

export { Modal };
