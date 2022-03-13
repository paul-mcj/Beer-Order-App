// React & Hooks
import { createContext, useReducer } from "react";

// Reducer Logic
import cartReducer from "./CartReducer";

// Define Context
const CartContext = createContext();

// named export
export const CartProvider = (props) => {
    // initial reducer context/state
    const init = {
        cartIsOpen: false,
    };

    // reducer for state mgmt
    const [state, dispatch] = useReducer(cartReducer, init);

    return (
        <CartContext.Provider value={{ ...state, dispatch }}>{props.children}</CartContext.Provider>
    );
};

// default export of context
export default CartContext;
