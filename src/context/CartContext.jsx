// React & Hooks
import { createContext, useReducer } from "react";

// Reducer Logic
import cartReducer from "./CartReducer";
import { getBeers } from "./CartActions";

// Define Context
const CartContext = createContext();

// named export for Provider component
export const CartProvider = (props) => {
    // initial reducer context/state
    const init = {
        beers: [],
        cartIsOpen: false,
    };

    // reducer for state mgmt
    const [state, dispatch] = useReducer(cartReducer, init);

    return (
        <CartContext.Provider value={{ ...state, dispatch }}>{props.children}</CartContext.Provider>
    );
};

// default export of defined context
export default CartContext;
