// react & hooks
import PropTypes from "prop-types";

// Components
import BeerItem from "./BeerItem";
import Card from "./Card";

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
            {pageNum === 1 && <Card>{showBeers.slice(0, 5)}</Card>}
            {pageNum === 2 && <Card>{showBeers.slice(5, 10)}</Card>}
            {pageNum === 3 && <Card>{showBeers.slice(10, 15)}</Card>}
        </div>
    );
};

Ontap.propTypes = {
    // beers: PropTypes.array.isRequired,
    // fixme: is required
    // paginationBeers: PropTypes.number,
};

export default Ontap;
