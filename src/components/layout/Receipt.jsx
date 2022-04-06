// react & hooks
import { Fragment, useContext } from "react";

// components
import Button from "../ui/Button";
import Card from "../../components/layout/Card";

// context
import CartContext from "../../context/cart/CartContext";

const Receipt = () => {
    const { beers } = useContext(CartContext);
    //  show cart items and amount. do a total like a receipt. have two buttons: one for order
    // and one to go back...

    const showItem =
        beers &&
        beers.map((beer) => (
            // fixme: pass in the amount of each (get from the cart context)
            <Fragment key={beer.id}>
                <p>{beer.name}</p>
                <p>{beer.abv.toFixed(2)} x 4</p>
                <p>$</p>
            </Fragment>
        ));
    return (
        <Fragment>
            <div className="grid grid-cols-3 justify-items-center mb-5">
                <h1 className="text-2xl text-bold">Beer</h1>
                <h1 className="text-2xl text-bold">Price</h1>
                <h1 className="text-2xl text-bold">Total</h1>
            </div>
            <Card>
                <div className="grid grid-cols-3 gap-5 justify-items-center">{showItem}</div>
            </Card>
            <div className="grid grid-rows-3 justify-items-center mt-5">
                <h1>Subtotal: $</h1>
                <h1>Total: $</h1>
                <Button>Place Order</Button>
            </div>
        </Fragment>
    );
};

export default Receipt;
