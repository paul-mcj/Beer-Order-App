// Components
import Card from "./Card";
import BeerItemAmount from "../ui/BeerItemAmount";

// react & hooks
import PropTypes from "prop-types";

const BeerItem = ({ name, amount }) => {
    return (
        <Card>
            <ul className="flex justify-between">
                <li className="flex flex-col basis-1/2">
                    <p>{name}</p>
                    <p>${amount}</p>
                </li>
                <li className="flex justify-between items-center">
                    <BeerItemAmount />
                </li>
            </ul>
        </Card>
    );
};

BeerItem.propTypes = {
    name: PropTypes.string,
    amount: PropTypes.number,
};

export default BeerItem;
