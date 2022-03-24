// Components
import BeerItem from "./BeerItem";
import Card from "./Card";

const Ontap = (props) => {
    const showCart =
        props.beers &&
        props.beers.map((beer) => <BeerItem key={beer.id} id={beer.id} name={beer.name} />);

    return (
        <div className="mt-10">
            <Card>{showCart}</Card>
        </div>
    );
};

export default Ontap;
