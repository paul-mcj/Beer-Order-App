// react & hooks
import PropTypes from "prop-types";

// Components
import BeerItem from "./BeerItem";
import Card from "./Card";

const Ontap = ({ beers }) => {
    const showCart =
        beers &&
        beers.map((beer) => (
            <BeerItem
                key={beer.id}
                id={beer.id}
                name={beer.name}
                price={beer.price}
                amount={beer.amount}
            />
        ));

    return (
        <div className="mt-10">
            <Card>{showCart}</Card>
        </div>
    );
};

Ontap.propTypes = {
    beers: PropTypes.array.isRequired,
};

export default Ontap;
