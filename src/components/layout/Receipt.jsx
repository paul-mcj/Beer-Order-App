// react & hooks
import { Fragment, useContext, useEffect } from "react";

// react-router-dom
import { Link } from "react-router-dom";

// components
import Button from "../ui/Button";
import Card from "../../components/layout/Card";

// context
import CartContext from "../../context/cart/CartContext";

const Receipt = () => {
    const taxRate = 0.13;
    const { beers, totalPrice } = useContext(CartContext);

    // memoize?
    const showItem = beers.map((beer) => {
        if (beer.amount > 0) {
            return (
                <div
                    key={beer.id}
                    className="grid grid-cols-4 justify-items-center gap-x-10 border-b border-dotted items-center"
                >
                    <p className="text-center">{beer.amount}</p>
                    <p className="text-center">{beer.name}</p>
                    <p>${beer.price.toFixed(2)}</p>
                    <p>${(beer.price * beer.amount).toFixed(2)}</p>
                </div>
            );
        } else {
            return <Fragment key={beer.id} />;
        }
    });

    // useEffect(() => {}, [beers]);

    // let showItem;
    // beers
    //     .filter((amount) => amount > 0)
    //     .map((beer) => (
    //         <Fragment key={beer.id}>
    //             <p>{beer.name}</p>
    //             <p>
    //                 {beer.abv.toFixed(2)} x {beer.amount}
    //             </p>
    //             <p>$</p>
    //         </Fragment>
    //     ));

    // useEffect(() => {
    //     beers
    //         .filter((amount) => amount > 0)
    //         .map((beer) => (
    //             <Fragment key={beer.id}>
    //                 <p>{beer.name}</p>
    //                 <p>
    //                     {beer.abv.toFixed(2)} x {beer.amount}
    //                 </p>
    //                 <p>$</p>
    //             </Fragment>
    //         ));
    // }, [beers]);

    return (
        <Fragment>
            <div className="grid grid-cols-4 justify-items-center mb-5">
                <h1 className="text-2xl text-bold">Qty</h1>
                <h1 className="text-2xl text-bold">Description</h1>
                <h1 className="text-2xl text-bold">Unit Price</h1>
                <h1 className="text-2xl text-bold">Total</h1>
            </div>
            <Card>
                <Fragment>
                    {showItem}
                    <div className="grid justify-items-end">
                        <h1>Subtotal: ${Math.abs(totalPrice).toFixed(2)}</h1>
                        <h1>Taxes: ${Math.abs(totalPrice * taxRate).toFixed(2)}</h1>
                        <h1>Total: ${Math.abs(totalPrice + totalPrice * taxRate).toFixed(2)}</h1>
                    </div>
                </Fragment>
            </Card>
            <div className="grid grid-rows-1 justify-items-center mt-5">
                {/* <h1>Subtotal: ${Math.abs(totalPrice).toFixed(2)}</h1>
                <h1>Taxes: ${Math.abs(totalPrice * taxRate).toFixed(2)}</h1>
                <h1>Total: ${Math.abs(totalPrice + totalPrice * taxRate).toFixed(2)}</h1> */}
                <Button>Place Order</Button>
                <Link to="/">
                    <Button>Go Home</Button>
                </Link>
            </div>
        </Fragment>
    );
};

export default Receipt;
