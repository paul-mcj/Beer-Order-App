// react & hooks
import PropTypes from "prop-types";
import { Fragment, useContext, useEffect } from "react";

// components
import BeerItem from "./BeerItem";
import GroupBeerItems from "./GroupBeerItems";

// context
import CartContext from "../../context/cart/CartContext";

const Ontap = ({ pageNum }) => {
    // context
    const { beers, dispatch } = useContext(CartContext);

    const showBeers = beers.map((beer) => (
        <BeerItem
            key={beer.id}
            id={beer.id}
            name={beer.name}
            price={beer.price}
            amount={beer.amount}
            description={beer.description}
            est={beer.est}
            food={beer.food}
        />
    ));

    const alphabetizeBeers = () => {
        dispatch({ type: "ALPHABETIZE_A_TO_Z", payload: beers });
        console.log("alphabetize");
    };

    const sortBeersByPrice = () => {};

    useEffect(() => {
        if (beers.length === 12) console.log("useeffect");
    }, [beers]);

    return (
        <Fragment>
            {/* <button className="btn" onClick={alphabetizeBeers}>
                alpha
            </button>
            <button className="btn" onClick={sortBeersByPrice}>
                price
            </button> */}
            {pageNum === 1 && <GroupBeerItems>{showBeers.slice(0, 4)}</GroupBeerItems>}
            {pageNum === 2 && <GroupBeerItems>{showBeers.slice(4, 8)}</GroupBeerItems>}
            {pageNum === 3 && <GroupBeerItems>{showBeers.slice(8, 12)}</GroupBeerItems>}
        </Fragment>
    );
};

Ontap.propTypes = {
    pageNum: PropTypes.number,
};

export default Ontap;
