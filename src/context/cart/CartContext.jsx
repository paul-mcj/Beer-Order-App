// React & Hooks
import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

// Reducer Logic
import cartReducer from "./CartReducer";

// Define Context
const CartContext = createContext();

// named export for Provider component
export const CartProvider = ({ children }) => {
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

    return <CartContext.Provider value={{ ...state, dispatch }}>{children}</CartContext.Provider>;
};

// assign proptypes
CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// default export of defined context
export default CartContext;
