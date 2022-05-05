// components
import Card from "./Card";
import BeerItemAmount from "../ui/BeerItemAmount";
import ExternalIcon from "../assets/ExternalIcon";
import Notification from "./Notification";

// react & hooks
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import useNotification from "../../hooks/use-notification";

// framer-motion
import { motion } from "framer-motion";

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
            />
        );
    } else
        return (
            // fixme: animation to bring all components into the page thorough quick counter-dissolve
            // <motion.div
            //     className="flex flex-col gap-3"
            //     initial={{ opacity: 0 }}
            //     animate={{ opacity: 1 }}
            //     exit={{ opacity: 0, transition: { duration: 3 } }}
            // >
            <Card hover={true}>
                <ul className="grid grid-cols-2 ">
                    <li>
                        <div className="flex">
                            {name} <ExternalIcon handleClick={updateNotificationState} />
                        </div>
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
            // </motion.div>
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
