// react & hooks
import PropTypes from "prop-types";
import { Fragment, useContext, useState } from "react";

// components
import BeerItem from "./BeerItem";
import GroupBeerItems from "./GroupBeerItems";
import Button from "../ui/Button";
import AToZIcon from "../assets/AToZIcon";
import ZToAIcon from "../assets/ZToAIcon";
import LowHighIcon from "../assets/LowHighIcon";
import HighLowIcon from "../assets/HighLowIcon";

// context
import CartContext from "../../context/cart/CartContext";

const Ontap = ({ pageNum }) => {
    // context to grab array of beers and updating reducer function
    const { beers, dispatch } = useContext(CartContext);

    // local states for sorting context array
    const [sortPrice, setSortPrice] = useState(null);
    const [sortAlpha, setSortAlpha] = useState(null);

    // create <BeerItems /> by looping though context array
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

    // sort array alphabetically
    const sortBeersByAlpha = () => {
        if (sortAlpha === null || sortAlpha === "Z_TO_A") {
            dispatch({ type: "SORT_STATE", payload: "SORT_A_TO_Z" });
            setSortAlpha(() => "A_TO_Z");
            return;
        } else dispatch({ type: "SORT_STATE", payload: "SORT_Z_TO_A" });
        setSortAlpha(() => "Z_TO_A");
        return;
    };

    // sort array based on price
    const sortBeersByPrice = () => {
        if (sortPrice === null || sortPrice === "HIGH_TO_LOW") {
            dispatch({ type: "SORT_STATE", payload: "SORT_LOW_TO_HIGH" });
            setSortPrice(() => "LOW_TO_HIGH");
            return;
        } else dispatch({ type: "SORT_STATE", payload: "SORT_HIGH_TO_LOW" });
        setSortPrice(() => "HIGH_TO_LOW");
        return;
    };

    return (
        <Fragment>
            <div className="px-4 xsm:px-6 tablet:px-12">
                <Button handleClick={sortBeersByAlpha}>
                    {sortAlpha === null || sortAlpha === "Z_TO_A" ? <AToZIcon /> : <ZToAIcon />}
                </Button>
                <Button handleClick={sortBeersByPrice}>
                    {sortPrice === null || sortPrice === "HIGH_TO_LOW" ? (
                        <LowHighIcon />
                    ) : (
                        <HighLowIcon />
                    )}
                </Button>
            </div>
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
