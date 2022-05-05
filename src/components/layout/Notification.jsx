// react
import { Fragment } from "react";
import PropTypes from "prop-types";

// react-dom
import ReactDOM from "react-dom";

// components
import Header from "./Header";

const Backdrop = () => {
    return <div className="bg-base-content opacity-20 fixed top-0 left-0 w-full h-screen z-10" />;
};

const Overlay = ({ title, message, handleClick, description, food }) => {
    let foodPairing, addClasses;
    // reduce food array into <li> elements
    if (food) {
        foodPairing = (
            <div className="flex flex-col items-center">
                <ul className="text-accent text-lg font-bold">Food Pairings</ul>
                {food.map((foodItem) => (
                    <li key={Math.random()} className="text-secondary-content">
                        {foodItem}
                    </li>
                ))}
            </div>
        );

        // conditionally set these classes for notification
        addClasses = "mx-24 bottom-24 overflow-auto";
    }

    return (
        <div className="grid justify-items-center">
            <div className={`z-10 bg-neutral fixed top-24 ${addClasses}`}>
                <section className="flex flex-col m-10 items-center">
                    <Header>
                        <p className="text-primary">{title}</p>
                    </Header>
                    {description ? (
                        <p className="text-secondary-content italic -mt-10 mb-5">{message}</p>
                    ) : (
                        <p className="text-secondary-content mb-5">{message}</p>
                    )}
                    {description && (
                        <p className="text-center text-secondary-content mb-5 px-12">
                            {description}
                        </p>
                    )}
                    {food && foodPairing}
                    <button
                        className="mt-10 btn border-none bg-secondary hover:bg-secondary-focus hover:text-base-300 text-secondary-content"
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

const Notification = ({ title, message, handleClick, description, food }) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(
                <Overlay
                    title={title}
                    message={message}
                    handleClick={handleClick}
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
