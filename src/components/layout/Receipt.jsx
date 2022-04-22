// react & hooks
import { Fragment, useContext, useState } from "react";

// components
import Card from "../../components/layout/Card";
import Button from "../ui/Button";
import SeeMoreIcon from "../assets/SeeMoreIcon";

// context
import CartContext from "../../context/cart/CartContext";

const Receipt = () => {
    const taxRate = 0.13;
    const { beers, totalPrice } = useContext(CartContext);
    const [displayTotals, setDisplayTotals] = useState(false);

    const changeDisplayTotalsState = () => {
        setDisplayTotals(() => !displayTotals);
    };

    const showItems = beers.map((beer) => {
        if (beer.amount > 0) {
            return (
                <div
                    key={beer.id}
                    className="grid grid-cols-4 justify-items-center gap-x-14 border-b border-accent border-dotted items-center"
                >
                    <p className="text-center">{beer.amount}</p>
                    <p className="text-center -mx-10">{beer.name}</p>
                    <p>$ {beer.price.toFixed(2)}</p>
                    <p>$ {(beer.price * beer.amount).toFixed(2)}</p>
                </div>
            );
        } else {
            return <Fragment key={beer.id} />;
        }
    });

    const colHeadings = (
        <div className="grid grid-cols-4 justify-items-center mb-2">
            <h1 className="text-lg text-bold">Qty</h1>
            <h1 className="text-lg text-bold">Description</h1>
            <h1 className="text-lg text-bold">Unit Price</h1>
            <h1 className="text-lg text-bold">Total</h1>
        </div>
    );

    const finalAmounts = (
        <Fragment>
            <div className="grid mt-10 grid-cols-4">
                <div className="grid-cols-3 col-start-3">
                    <h1 className="text-right">Subtotal:</h1>
                    <h1 className="text-right">Taxes:</h1>
                    <h1 className="text-right text-lg font-bold mt-2">Total:</h1>
                </div>
                <div className="grid-cols-3 col-start-4 ml-10">
                    <h1 className="text-left">$ {Math.abs(totalPrice).toFixed(2)}</h1>
                    <h1 className="text-left">$ {Math.abs(totalPrice * taxRate).toFixed(2)}</h1>
                    <h1 className="text-left mt-2 font-bold text-lg self-center">
                        $ {Math.abs(totalPrice + totalPrice * taxRate).toFixed(2)}
                    </h1>
                </div>
            </div>
            {/* add  className="animate-pulse" if button hasn't been touched for 10 secs */}
            <div className="text-center">
                <Button>Place Order</Button>
            </div>
        </Fragment>
    );

    return (
        <Fragment>
            {colHeadings}
            <Card>
                {showItems}
                {!displayTotals && (
                    /* add  className="animate-pulse" if button hasn't been touched for 10 secs */
                    <div className="mx-auto mt-10 animate-bounce">
                        <Button handleClick={changeDisplayTotalsState}>
                            <SeeMoreIcon />
                        </Button>
                    </div>
                )}
                {displayTotals && finalAmounts}
            </Card>
        </Fragment>
    );
};

export default Receipt;
