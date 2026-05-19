import { useState } from "react";
function useToggle(initialValue = false) {
    const [visible, setVisible] = useState(initialValue);
    const toggle = () => setVisible((prev) => !prev);
    return [visible, toggle];
}

export { useToggle };
