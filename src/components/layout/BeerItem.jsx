// components
import Card from "./Card";
import BeerItemAmount from "../ui/BeerItemAmount";
import ExternalIcon from "../assets/ExternalIcon";
import Notification from "./Notification";

// react & hooks
import PropTypes from "prop-types";
import { useContext, useState } from "react";

// context
import NotificationContext from "../../context/notification/NotificationContext";
import CartContext from "../../context/cart/CartContext";

const BeerItem = ({ name, amount, id, price, est, description, food }) => {
    // local state
    const [currentItemAmount, setCurrentItemAmount] = useState(amount);

    // context
    const { isNotification, updateNotificationState, closeNotification } =
        useContext(NotificationContext);
    const { beers, dispatch, totalItems, totalPrice } = useContext(CartContext);

    const openNotif = (e) => {
        updateNotificationState(() => !isNotification);
        // console.log(e.target);
    };

    if (isNotification) {
        return (
            <Notification
                title={name}
                message={`Est. ${est}`}
                description={description}
                food={food}
                handleClick={closeNotification}
            />
        );
    } else
        return (
            <Card hover={true}>
                <ul className="grid grid-cols-2 ">
                    <li>
                        <div className="flex">
                            {name} <ExternalIcon handleClick={openNotif} />
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
