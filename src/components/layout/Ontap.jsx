// react & hooks
import PropTypes from "prop-types";
import { Fragment } from "react";

// Components
import BeerItem from "./BeerItem";
import GroupBeerItems from "./GroupBeerItems";

const Ontap = ({ beers, pageNum }) => {
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

    return (
        <Fragment>
            {pageNum === 1 && <GroupBeerItems>{showBeers.slice(0, 4)}</GroupBeerItems>}
            {pageNum === 2 && <GroupBeerItems>{showBeers.slice(4, 8)}</GroupBeerItems>}
            {pageNum === 3 && <GroupBeerItems>{showBeers.slice(8, 12)}</GroupBeerItems>}
        </Fragment>
    );
};

Ontap.propTypes = {
    beers: PropTypes.array.isRequired,
    pageNum: PropTypes.number,
};

export default Ontap;
