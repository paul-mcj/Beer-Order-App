// components
import Card from "./Card";
import BeerItemAmount from "../ui/BeerItemAmount";
import ExternalButton from "../ui/ExternalButton";
import Notification from "./Notification";

// react & hooks
import PropTypes from "prop-types";
import { useContext, useState, useEffect } from "react";
import useNotification from "../../hooks/use-notification";

// framer-motion
import { motion } from "framer-motion";

const BeerItem = ({ name, amount, id, price, est, description, food }) => {
    // local state
    const [currentItemAmount, setCurrentItemAmount] = useState(amount);
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    // custom hook
    const { isNotification, updateNotificationState } = useNotification();

    // for every component evaluation set this state in order to compare against it for media queries
    useEffect(() => {
        setScreenSize(() => window.innerWidth);
    });

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
            // fixme: animation to bring all components into the page thorough quick counter-dissolve
            // <motion.div
            //     className="flex flex-col gap-3"
            //     initial={{ opacity: 0 }}
            //     animate={{ opacity: 1 }}
            //     exit={{ opacity: 0, transition: { duration: 3 } }}
            // >
            <Card hover={true}>
                {screenSize < 470 && <ExternalButton handleClick={updateNotificationState} />}
                <ul className="grid grid-row-2 xsm:grid-cols-2">
                    <li>
                        {screenSize >= 470 ? (
                            <p
                                className="link link-accent text-sm xsm:text-base font-bold"
                                onClick={updateNotificationState}
                            >
                                {name}
                            </p>
                        ) : (
                            <p className="text-sm xsm:text-base font-bold">{name}</p>
                        )}

                        <p className="text-sm xsm:text-base italic">$ {price.toFixed(2)}</p>
                    </li>
                    <li className="flex justify-between items-center justify-self-end mt-4">
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
