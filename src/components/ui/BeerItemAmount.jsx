// react & hooks
import { Fragment, useContext } from "react";
import PropTypes from "prop-types";

// react-icons
import { GoDash as LessIcon, GoPlus as MoreIcon } from "react-icons/go";

// components
import Button from "./Button";
import Input from "./Input";

// context
import CartContext from "../../context/cart/CartContext";

const BeerItemAmount = ({ currentItemAmount, setCurrentItemAmount, id, price }) => {
    const { dispatch, totalItems, totalPrice } = useContext(CartContext);

    // change state of current beer item in the cart, and update context of all beers
    const handleSubmit = (amount) => {
        let newTotalItems = totalItems;
        let newTotalPrice = totalPrice;
        if (amount >= currentItemAmount) {
            newTotalItems += amount - currentItemAmount;
            newTotalPrice += price * (amount - currentItemAmount);
        } else {
            newTotalItems -= currentItemAmount - amount;
            newTotalPrice -= price * (currentItemAmount - amount);
        }
        setCurrentItemAmount(() => amount);
        dispatch({ type: "UPDATE_BEER_ITEM_AMOUNT", payload: { id, amount } });
        dispatch({ type: "UPDATE_TOTAL_ITEMS", payload: newTotalItems });
        dispatch({ type: "UPDATE_TOTAL_PRICE", payload: newTotalPrice });
    };

    // beer item state is quickly updated to be one less
    const oneLess = () => {
        // validation so that amount cannot be less than zero
        if (currentItemAmount - 1 < 0) {
            // notification
            console.log("nope");
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

    // add only one more beer item amount to current state
    const oneMore = () => {
        setCurrentItemAmount((prevAmount) => prevAmount + 1);
        dispatch({
            type: "UPDATE_BEER_ITEM_AMOUNT",
            payload: { id: id, amount: currentItemAmount + 1 },
        });
        dispatch({ type: "UPDATE_TOTAL_ITEMS", payload: totalItems + 1 });
        dispatch({ type: "UPDATE_TOTAL_PRICE", payload: totalPrice + price });
    };

    return (
        <Fragment>
            <Button handleClick={oneLess}>
                <LessIcon />
            </Button>
            <Input currentItemAmount={currentItemAmount} handleSubmit={handleSubmit} />
            <Button handleClick={oneMore}>
                <MoreIcon />
            </Button>
        </Fragment>
    );
};

BeerItemAmount.propTypes = {
    currentItemAmount: PropTypes.number,
    setCurrentItemAmount: PropTypes.func.isRequired,
    id: PropTypes.number,
    price: PropTypes.number,
};

export default BeerItemAmount;
