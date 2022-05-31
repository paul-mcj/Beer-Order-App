// react
import { Fragment } from "react";
import PropTypes from "prop-types";

// react-dom
import ReactDOM from "react-dom";

// components
import Header from "./Header";
import ExitIcon from "../assets/ExitIcon";

const Backdrop = () => {
    return <div className="bg-base-content opacity-20 fixed top-0 left-0 w-full h-screen z-20" />;
};

const Overlay = ({ title, message, handleClick, closeNotification, description, food }) => {
    let foodPairing;
    // reduce food array into <li> elements
    if (food) {
        foodPairing = (
            <div className="text-center">
                <ul className="flex flex-col items-center text-accent text-base xsm:text-lg font-bold">
                    Food Pairings
                </ul>
                {food.map((foodItem) => (
                    <li
                        key={Math.random()}
                        className="text-secondary-content leading-6 xsm:leading-8 text-xs xsm:text-sm list-none"
                    >
                        {foodItem}
                    </li>
                ))}
            </div>
        );
    }

    return (
        <div className="grid justify-items-center">
            <div className={`z-20 bg-neutral rounded top-24 mx-12 fixed overflow-auto`}>
                <span className="absolute right-1 top-1">
                    <button onClick={closeNotification} className="absolute right-2 top-2">
                        <ExitIcon />
                    </button>
                </span>
                <section className="flex flex-col m-10 items-center">
                    <Header>
                        <p className="text-primary">{title}</p>
                    </Header>
                    {description ? (
                        <p className="text-secondary-content italic -mt-10 mb-5 text-base xsm:text-lg">
                            {message}
                        </p>
                    ) : (
                        <p className="text-secondary-content mb-5 text-sm xsm:text-base text-center">
                            {message}
                        </p>
                    )}
                    {description && (
                        <p className="text-center text-secondary-content mb-5 text-xs xsm:text-sm leading-6 xsm:leading-8">
                            {description}
                        </p>
                    )}
                    {food && foodPairing}
                    <button
                        className="mt-10 btn btn-xs border-none bg-secondary hover:bg-secondary-focus hover:text-base-300 text-secondary-content"
                        onClick={handleClick}
                    >
                        continue
                    </button>
                </section>
            </div>
        </div>
    );
};

// assign proptypes
Overlay.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    description: PropTypes.string,
    food: PropTypes.array,
};

const Notification = ({ title, message, handleClick, closeNotification, description, food }) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(
                <Overlay
                    title={title}
                    message={message}
                    handleClick={handleClick}
                    closeNotification={closeNotification}
                    description={description}
                    food={food}
                />,
                document.querySelector("#notification-root")
            )}
        </Fragment>
    );
};

// assign proptypes
Notification.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    description: PropTypes.string,
    food: PropTypes.array,
};

export default Notification;
