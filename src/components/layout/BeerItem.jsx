// components
import Card from "./Card";
import BeerItemAmount from "../ui/BeerItemAmount";

// react & hooks
import PropTypes from "prop-types";
import { useState } from "react";

const BeerItem = ({ name, amount, id, price }) => {
    const [currentItemAmount, setCurrentItemAmount] = useState(amount);

    return (
        <Card>
            <ul className="grid grid-cols-2">
                <li className="flex flex-col">
                    <p>{name}</p>
                    <p>$ {price.toFixed(2)}</p>
                </li>
                <li className="flex justify-between items-center justify-self-end">
                    <BeerItemAmount
                        currentItemAmount={currentItemAmount}
                        setCurrentItemAmount={setCurrentItemAmount}
                        id={id}
                        price={price}
                    />
                </li>
            </ul>
        </Card>
    );
};

BeerItem.propTypes = {
    name: PropTypes.string,
    amount: PropTypes.number,
    id: PropTypes.number,
    price: PropTypes.number,
};

export default BeerItem;
