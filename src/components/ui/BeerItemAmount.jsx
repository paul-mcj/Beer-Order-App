// react
import { Fragment, useContext } from "react";

// react-icons
import { GoDash as LessIcon, GoPlus as MoreIcon } from "react-icons/go";

// components
import Button from "./Button";
import Input from "./Input";

// context
import CartContext from "../../context/cart/CartContext";

const BeerItemAmount = () => {
    const {} = useContext(CartContext);

    // fixme: validation for number checking and non-zero numbers
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };

    const oneLess = (e) => {
        console.log("one less");
    };

    const oneMore = (e) => {
        console.log("one more");
    };

    return (
        <Fragment>
            <Button handleClick={oneLess}>
                <LessIcon />
            </Button>
            <Input handleSubmit={handleSubmit} />
            <Button handleClick={oneMore}>
                <MoreIcon />
            </Button>
        </Fragment>
    );
};

export default BeerItemAmount;
