import { useReducer } from "react";
import styles from "./Basket.module.css";

const products = [
    { id: 1, name: "Casque audio", price: 99 },
    { id: 2, name: "Clavier mécanique", price: 89.99 },
    { id: 3, name: "Souris ergonomique", price: 34.99 },
    { id: 4, name: "Tapis de souris XL", price: 19.99 },
];
const initialBasket = { articles: [] };

function basketReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM": {
            const exist = state.articles.find((article) => article.id === action.payload.id);
            if (exist) {
                return {
                    ...state,
                    articles: state.articles.map((article) =>
                        article.id === action.payload.id ? { ...article, quantity: article.quantity + 1 } : article,
                    ),
                };
            }
            return {
                ...state,
                articles: [...state.articles, { ...action.payload, quantity: 1 }],
            };
        }

        case "DELETE_ITEM":
            return {
                ...state,
                articles: state.articles.filter((item) => item.id !== action.payload),
            };
        case "CHANGE_QUANTITY": {
            if (action.payload.quantity < 1) return state;
            return {
                ...state,
                articles: state.articles.map((article) =>
                    article.id === action.payload.id ? { ...article, quantity: action.payload.quantity } : article,
                ),
            };
        }

        case "CLEAN_BASKET":
            return {
                ...state,
                articles: [],
            };
        default:
            return state;
    }
}

function Basket() {
    const [state, dispatch] = useReducer(basketReducer, initialBasket);
    const total = state.articles.reduce((acc, article) => acc + article.price * article.quantity, 0);

    return (
        <div className={styles["shop-container"]}>
            <h2 className={styles["title"]}>Shop</h2>
            <div className={styles["vitrine"]}>
                <div className={styles["product-list"]}>
                    {products.map((product) => (
                        <div key={product.id} className={styles["product-card"]}>
                            <div className={styles["product-info"]}>
                                <strong>{product.name}</strong>
                                <span className={styles["price"]}>{product.price.toFixed(2)} €</span>
                            </div>
                            <button
                                className={styles["add-btn"]}
                                onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
                            >
                                Add to basket
                            </button>
                        </div>
                    ))}
                </div>

                <div className={styles["basket"]}>
                    <h2>
                        Basket ({state.articles.length} article{state.articles.length > 1 ? "s" : ""}){" "}
                    </h2>
                    <ul className={styles["basket-list"]}>
                        {state.articles.map((article) => (
                            <li key={article.id} className={styles["basket-article"]}>
                                <div className={styles["article-info"]}>
                                    <strong>{article.name}</strong>
                                    <span className={styles["article-price"]}>
                                        {(article.price * article.quantity).toFixed(2)} €
                                    </span>
                                </div>
                                <div className={styles["controls"]}>
                                    <button
                                        className={styles["minus-item"]}
                                        onClick={() =>
                                            dispatch({
                                                type: "CHANGE_QUANTITY",
                                                payload: { id: article.id, quantity: article.quantity - 1 },
                                            })
                                        }
                                    >
                                        -
                                    </button>
                                    <span className={styles["quantity"]}>{article.quantity}</span>
                                    <button
                                        className={styles["plus-item"]}
                                        onClick={() =>
                                            dispatch({
                                                type: "CHANGE_QUANTITY",
                                                payload: { id: article.id, quantity: article.quantity + 1 },
                                            })
                                        }
                                    >
                                        +
                                    </button>
                                    <button
                                        className={styles["delete-item"]}
                                        onClick={() =>
                                            dispatch({
                                                type: "DELETE_ITEM",
                                                payload: article.id,
                                            })
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className={styles["clean-basket"]}>
                        <strong>Total : {total.toFixed(2)} €</strong>
                        <button className={styles["clean-btn"]} onClick={() => dispatch({ type: "CLEAN_BASKET" })}>
                            Clean basket
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export { Basket };
