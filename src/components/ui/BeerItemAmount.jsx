// react & hooks
import { Fragment, useContext } from "react";
import PropTypes from "prop-types";

// components
import Button from "./Button";
import Notification from "../layout/Notification";
import LessIcon from "../assets/LessIcon";
import MoreIcon from "../assets/MoreIcon";

// context
import CartContext from "../../context/cart/CartContext";
import NotificationContext from "../../context/notification/NotificationContext";

const BeerItemAmount = ({ currentItemAmount, setCurrentItemAmount, id, price }) => {
    const { dispatch, totalItems, totalPrice } = useContext(CartContext);
    const { isNotification, updateState } = useContext(NotificationContext);

    // beer item state is quickly updated to be one less
    const oneLess = () => {
        // validation so that amount cannot be less than zero
        if (currentItemAmount - 1 < 0) {
            console.log("show modal");
            updateState(() => !isNotification);
        } else {
            setCurrentItemAmount((prevAmount) => prevAmount - 1);
            dispatch({
                type: "UPDATE_BEER_ITEM_AMOUNT",
                payload: { id: id, amount: currentItemAmount - 1 },
            });
            dispatch({ type: "UPDATE_TOTAL_ITEMS", payload: totalItems - 1 });
            dispatch({ type: "UPDATE_TOTAL_PRICE", payload: totalPrice - price });
        }
    };

    // add only one more beer item amount to current state and context
    const oneMore = () => {
        setCurrentItemAmount((prevAmount) => prevAmount + 1);
        dispatch({
            type: "UPDATE_BEER_ITEM_AMOUNT",
            payload: { id: id, amount: currentItemAmount + 1 },
        });
        dispatch({ type: "UPDATE_TOTAL_ITEMS", payload: totalItems + 1 });
        dispatch({ type: "UPDATE_TOTAL_PRICE", payload: totalPrice + price });
    };

    const handleClick = () => {
        updateState(() => !isNotification);
    };

    if (isNotification) {
        return (
            <Notification
                title="Notice"
                message="Amount cannot be less than 0"
                handleClick={handleClick}
            />
        );
    } else {
        return (
            <Fragment>
                <Button handleClick={oneLess}>
                    <LessIcon />
                </Button>
                {currentItemAmount}
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
