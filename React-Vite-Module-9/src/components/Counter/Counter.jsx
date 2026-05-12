import { useState } from "react";
import "./Counter.css";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <h2 className="title">Counter: {count}</h2>
            <button className="increment" onClick={() => setCount(count + 1)}>
                +1
            </button>
            <button className="decrement" onClick={() => setCount(count - 1)}>
                -1
            </button>
            <button className="reset" onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    );
}

export { Counter };
