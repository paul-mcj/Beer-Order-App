// react & hooks
import PropTypes from "prop-types";

// Components
import BeerItem from "./BeerItem";
// import div from "./div";

const Ontap = ({ beers, pageNum }) => {
    const showBeers = beers.map((beer) => (
        <BeerItem
            key={beer.id}
            id={beer.id}
            name={beer.name}
            price={beer.price}
            amount={beer.amount}
        />
    ));

    // setSegmentedBeersArr((prev) => [...prev, showBeers[i]]);

    return (
        <div className="mt-10">
            {pageNum === 1 && <div className="flex flex-col gap-3">{showBeers.slice(0, 4)}</div>}
            {pageNum === 2 && <div>{showBeers.slice(4, 8)}</div>}
            {pageNum === 3 && <div>{showBeers.slice(8, 12)}</div>}
        </div>
    );
};

Ontap.propTypes = {
    // beers: PropTypes.array.isRequired,
    // fixme: is required
    // paginationBeers: PropTypes.number,
};

export default Ontap;
