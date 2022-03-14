// React & Hooks
import { useContext } from "react";

// Context
import CartContext from "../../context/CartContext";

const BeerItem = (props) => {
    const cartContext = useContext(CartContext);

    return (
        <>
            <h1>{props.id}</h1>
            <h1>{cartContext.beers}</h1>
        </>
    );
};

export default BeerItem;
