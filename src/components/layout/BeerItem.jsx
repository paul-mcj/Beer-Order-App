// React & Hooks
import { Fragment, useContext } from "react";

// Context
import CartContext from "../../context/CartContext";

const BeerItem = (props) => {
    const cartContext = useContext(CartContext);

    return (
        <Fragment>
            <h1>{props.id}</h1>
        </Fragment>
    );
};

export default BeerItem;
