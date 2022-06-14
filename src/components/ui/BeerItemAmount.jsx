// react & hooks
import { Fragment, useContext, useState } from "react";
import useNotification from "../../hooks/use-notification";
import PropTypes from "prop-types";

// components
import Button from "./Button";
import Notification from "../layout/Notification";
import LessIcon from "../assets/LessIcon";
import MoreIcon from "../assets/MoreIcon";

// context
import CartContext from "../../context/cart/CartContext";

const BeerItemAmount = ({ currentItemAmount, setCurrentItemAmount, id, price }) => {
    // component state defines animations
    const [shouldAnimate, setShouldAnimate] = useState(false);

    // cart context
    const { dispatch, totalItems, totalPrice } = useContext(CartContext);

    // custom hook
    const { isNotification, updateNotificationState } = useNotification();

    // clear animation by updating component state
    const clearAnimation = () => {
        setTimeout(() => {
            setShouldAnimate(() => false);
        }, 250);
    };

    // subtract one beer item from cart context
    const oneLess = () => {
        // validation so that beer item amount cannot be less than zero (else call notification panel to display error)
        if (currentItemAmount - 1 < 0) {
            updateNotificationState();
        } else {
            setCurrentItemAmount((prevAmount) => prevAmount - 1);
            dispatch({
                type: "UPDATE_BEER_ITEM_AMOUNT",
                payload: { id: id, amount: currentItemAmount - 1 },
            });
            dispatch({ type: "UPDATE_TOTAL_ITEMS", payload: totalItems - 1 });
            dispatch({ type: "UPDATE_TOTAL_PRICE", payload: totalPrice - price });
            setShouldAnimate(() => true);
            clearAnimation();
        }
    };

    // add only one more beer item amount to cart context
    const oneMore = () => {
        setCurrentItemAmount((prevAmount) => prevAmount + 1);
        dispatch({
            type: "UPDATE_BEER_ITEM_AMOUNT",
            payload: { id: id, amount: currentItemAmount + 1 },
        });
        dispatch({ type: "UPDATE_TOTAL_ITEMS", payload: totalItems + 1 });
        dispatch({ type: "UPDATE_TOTAL_PRICE", payload: totalPrice + price });
        setShouldAnimate(() => true);
        clearAnimation();
    };

    if (isNotification) {
        return (
            <Notification
                title="Notice"
                message="Amount cannot be less than 0"
                handleClick={updateNotificationState}
                btnText="continue"
            />
        );
    } else {
        return (
            <Fragment>
                <Button handleClick={oneLess}>
                    <LessIcon />
                </Button>
                {shouldAnimate ? (
                    <span className="mx-5 animate-quickPing xsm:text-lg tablet:text-xl">
                        {currentItemAmount}
                    </span>
                ) : (
                    <span className="mx-5 xsm:text-lg tablet:text-xl">{currentItemAmount}</span>
                )}
                <Button handleClick={oneMore}>
                    <MoreIcon />
                </Button>
            </Fragment>
        );
    }
};

BeerItemAmount.propTypes = {
    currentItemAmount: PropTypes.number,
    setCurrentItemAmount: PropTypes.func.isRequired,
    id: PropTypes.number,
    price: PropTypes.number,
};

export default BeerItemAmount;
