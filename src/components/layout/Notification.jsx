// react
import { Fragment } from "react";
import PropTypes from "prop-types";

// react-dom
import ReactDOM from "react-dom";

// components
import Header from "./Header";
import ExitButton from "../ui/ExitButton";
import TextButton from "../ui/TextButton";

const Backdrop = () => {
    return <div className="bg-base-content opacity-20 fixed top-0 left-0 w-full h-screen z-20" />;
};

const Overlay = ({ title, message, handleClick, btnText, description, food }) => {
    let foodPairing;
    // if food and description are passed in as props, then this <Notification /> will need to have unique styles returned
    const extraDataToDisplay = food && description;

    if (extraDataToDisplay) {
        // make food array into <li> elements
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
            <div
                className={`animate-fadeIn grid z-20 bg-neutral rounded top-24 mx-12 fixed overflow-auto ${
                    extraDataToDisplay ? "bottom-64" : "bottom-[384]"
                }`}
            >
                {btnText !== "reload" && <ExitButton handleClick={handleClick} />}
                <section className="place-self-center flex flex-col m-10 items-center justify-around h-fit">
                    <Header>
                        <p className="text-primary">{title}</p>
                    </Header>
                    {extraDataToDisplay ? (
                        <p className="text-secondary-content italic -mt-10 mb-5 text-base xsm:text-lg ">
                            {message}
                        </p>
                    ) : (
                        <p className="text-secondary-content mb-5 text-sm xsm:text-base text-center">
                            {message}
                        </p>
                    )}
                    {extraDataToDisplay && (
                        <p className="text-center text-secondary-content mb-5 text-xs xsm:text-sm leading-6 xsm:leading-8">
                            {description}
                        </p>
                    )}
                    {extraDataToDisplay && foodPairing}
                    <TextButton handleClick={handleClick} btnText={btnText} />
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
    btnText: PropTypes.string,
    description: PropTypes.string,
    food: PropTypes.array,
};

const Notification = ({ title, message, handleClick, btnText, description, food }) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(
                <Overlay
                    title={title}
                    message={message}
                    handleClick={handleClick}
                    description={description}
                    btnText={btnText}
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
    btnText: PropTypes.string,
    description: PropTypes.string,
    food: PropTypes.array,
};

export default Notification;
