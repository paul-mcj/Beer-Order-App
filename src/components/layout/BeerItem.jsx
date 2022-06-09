// components
import Card from "./Card";
import BeerItemAmount from "../ui/BeerItemAmount";
import Notification from "./Notification";

// react & hooks
import PropTypes from "prop-types";
import { useState } from "react";
import useNotification from "../../hooks/use-notification";

const BeerItem = ({ name, amount, id, price, est, description, food }) => {
    // local state
    const [currentItemAmount, setCurrentItemAmount] = useState(amount);

    // custom hook
    const { isNotification, updateNotificationState } = useNotification();

    if (isNotification) {
        return (
            <Notification
                title={name}
                message={`Est. ${est}`}
                description={description}
                food={food}
                handleClick={updateNotificationState}
                btnText="continue"
            />
        );
    } else
        return (
            <Card hover={true}>
                <ul className="grid grid-rows-2 animate-bubbleIn">
                    <li>
                        <p
                            className="link link-accent font-bold text-sm xsm:text-base sm:text-lg tablet:text-xl lg:text-2xl inline"
                            onClick={updateNotificationState}
                        >
                            {name}
                        </p>
                        <p className="italic text-sm xsm:text-base sm:text-lg tablet:text-xl lg:text-2xl">
                            $ {price.toFixed(2)}
                        </p>
                    </li>
                    <li className="flex justify-between items-center self-center justify-self-end">
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
    est: PropTypes.string,
    description: PropTypes.string,
    food: PropTypes.array,
};

export default BeerItem;
