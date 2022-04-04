// React & Hooks
import { createContext, useReducer } from "react";

// Reducer Logic
import cartReducer from "./CartReducer";

// Define Context
const CartContext = createContext();

// named export for Provider component
export const CartProvider = (props) => {
    // initial reducer context/state
    const init = {
        beers: [],
        isLoading: true,
        totalAmount: 0,
        totalItems: 0,
        oneMore: () => {},
        oneLess: () => {},
    };

    // reducer for state mgmt
    const [state, dispatch] = useReducer(cartReducer, init);

    return (
        <CartContext.Provider value={{ ...state, dispatch }}>{props.children}</CartContext.Provider>
    );
};

// default export of defined context
export default CartContext;
