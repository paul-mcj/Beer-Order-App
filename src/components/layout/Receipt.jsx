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
    // component state
    const [displayTotals, setDisplayTotals] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [orderHasBeenPlaced, setOrderHasBeenPlaced] = useState(false);

    // context
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
        // wait 3 secs before updating state so LoadingIcon can be seen
        setTimeout(() => {
            updateNotificationState();
            setIsLoading(() => false);
        }, 3000);
    };

    // only show beer items that have been selected from the home screen to appear in the cart component
    const showItems = beers.map((beer) => {
        if (beer.amount > 0) {
            console.log(beer);
            return (
                <div
                    key={beer.id}
                    className="grid grid-cols-4 justify-items-center gap-x-14 border-b border-accent border-dotted items-center pb-2"
                >
                    <p className="text-center text-xs xsm:text-sm">{beer.amount}</p>
                    <p className="text-center -mx-10 text-xs xsm:text-sm">{beer.name}</p>
                    <p className="text-xs xsm:text-sm">${beer.price.toFixed(2)}</p>
                    <p className="text-xs xsm:text-sm">${(beer.price * beer.amount).toFixed(2)}</p>
                </div>
            );
        } else {
            // return to avoid react list error
            return <Fragment key={beer.id} />;
        }
    });

    // used to reduce returned JSX
    const colHeadings = (
        <div className="grid grid-cols-4 justify-items-center mb-2">
            <h1 className="text-sm xsm:text-base text-bold">Qty</h1>
            <h1 className="text-sm xsm:text-base text-bold">Item</h1>
            <h1 className="text-sm xsm:text-base text-bold">Unit Price</h1>
            <h1 className="text-sm xsm:text-base text-bold">Total</h1>
        </div>
    );

    // used to reduce returned JSX
    const finalAmounts = (
        <Fragment>
            <div className="grid mt-8 mb-4 grid-cols-2">
                <div className="grid-cols-3 col-start-1 mr-4 justify-self-end">
                    <h1 className="text-right text-xs xsm:text-sm">Subtotal:</h1>
                    <h1 className="text-right text-xs xsm:text-sm">Taxes:</h1>
                    <h1 className="text-right text-sm xsm:text-base font-bold">Total:</h1>
                </div>
                <div className="grid-cols-3 col-start-2 ml-4">
                    <h1 className="text-left text-xs xsm:text-sm">${subTotal}</h1>
                    <h1 className="text-left text-xs xsm:text-sm">${taxes}</h1>
                    <h1 className="text-left font-bold text-sm xsm:text-base">${totalAmount}</h1>
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
