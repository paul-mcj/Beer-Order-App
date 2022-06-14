// react & hooks
import { Fragment, useContext, useState } from "react";
import useNotification from "../../hooks/use-notification";

// components
import Card from "../../components/layout/Card";
import SeeMoreButton from "../ui/SeeMoreButton";
import TextButton from "../ui/TextButton";
import Notification from "./Notification";
import LoadingIcon from "../assets/LoadingIcon";

// context
import CartContext from "../../context/cart/CartContext";

// utils
import { redirectToHomePg } from "../../utils/functions";

const Receipt = () => {
    // component state needs to be checked to facilitate correct UI
    const [displayTotals, setDisplayTotals] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [orderHasBeenPlaced, setOrderHasBeenPlaced] = useState(false);

    // cart context
    const { beers, totalPrice } = useContext(CartContext);

    // custom hook
    const { isNotification, updateNotificationState } = useNotification();

    // local vars
    const taxRate = 0.13;
    const taxes = Math.abs(totalPrice * taxRate).toFixed(2);
    const subTotal = Math.abs(totalPrice).toFixed(2);
    const totalAmount = Math.abs(totalPrice + totalPrice * taxRate).toFixed(2);

    // reveal total price amounts
    const changeDisplayTotalsState = () => {
        setDisplayTotals(() => !displayTotals);
    };

    // defines what will occur when an order is placed
    const placeOrder = () => {
        setIsLoading(() => true);
        setOrderHasBeenPlaced(() => true);
        // wait 3 artificial secs before updating state so <LoadingIcon /> can be seen
        setTimeout(() => {
            updateNotificationState();
            setIsLoading(() => false);
        }, 3000);
    };

    // only show beer items that have been selected from the home screen to appear in the cart component
    const showItems = beers.map((beer) => {
        if (beer.amount > 0) {
            return (
                <div
                    key={beer.id}
                    className="grid grid-cols-4 justify-items-center gap-x-14 border-b border-accent border-dotted items-center pb-2 text-center text-xs xsm:text-sm sm:text-base tablet:text-lg"
                >
                    <p>{beer.amount}</p>
                    <p className="-mx-10">{beer.name}</p>
                    <p>${beer.price.toFixed(2)}</p>
                    <p>${(beer.price * beer.amount).toFixed(2)}</p>
                </div>
            );
        } else {
            // return regardless to avoid compiler list errors
            return <Fragment key={beer.id} />;
        }
    });

    // reuse css for returned JSX
    const colHeadings = (
        <div className="grid grid-cols-4 justify-items-center mb-2 text-sm xsm:text-base sm:text-lg tablet:text-xl">
            <h1>Qty</h1>
            <h1>Item</h1>
            <h1>Price</h1>
            <h1>Total</h1>
        </div>
    );

    // used to reduce returned JSX
    const finalAmounts = (
        <Fragment>
            <div className="grid mt-8 mb-4 grid-cols-2">
                <div className="grid-cols-3 col-start-1 mr-4 text-right text-xs xsm:text-sm sm:text-base tablet:text-lg">
                    <h1>Subtotal:</h1>
                    <h1>Taxes:</h1>
                    <h1 className="font-bold xsm:text-base sm:text-lg tablet:text-xl">Total:</h1>
                </div>
                <div className="grid-cols-3 col-start-2 ml-4 text-left text-xs xsm:text-sm sm:text-base tablet:text-lg">
                    <h1>${subTotal}</h1>
                    <h1>${taxes}</h1>
                    <h1 className="font-bold xsm:text-base sm:text-lg tablet:text-xl">
                        ${totalAmount}
                    </h1>
                </div>
            </div>
            <div className="text-center">
                {!orderHasBeenPlaced && !isLoading && (
                    <TextButton
                        handleClick={placeOrder}
                        btnText="place order"
                        animationType="pulseDeep"
                    />
                )}
                {orderHasBeenPlaced && isLoading && (
                    <div className="p-5">
                        <LoadingIcon />
                    </div>
                )}
                {orderHasBeenPlaced && !isLoading && (
                    <TextButton
                        handleClick={redirectToHomePg}
                        btnText="reload"
                        animationType="pulseDeep"
                    />
                )}
            </div>
        </Fragment>
    );

    if (isNotification) {
        return (
            <Notification
                title="Thank-you!"
                message="Your order has been successfully placed!"
                btnText="reload"
                handleClick={redirectToHomePg}
            />
        );
    } else {
        return (
            <Fragment>
                {colHeadings}
                <Card>
                    {showItems}
                    {!displayTotals && <SeeMoreButton handleClick={changeDisplayTotalsState} />}
                    {displayTotals && finalAmounts}
                </Card>
            </Fragment>
        );
    }
};

export default Receipt;
