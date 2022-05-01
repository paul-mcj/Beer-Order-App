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
    return (
        <div className="grid justify-items-center">
            <div className="z-10 bg-neutral fixed top-20">
                <section className="flex flex-col m-10 items-center">
                    <Header>
                        <p className="text-secondary-content">{title}</p>
                    </Header>
                    <p className="text-secondary-content mb-5">{message}</p>
                    {description && <p>{description}</p>}
                    {food && <ul>food array goes here</ul>}
                    <button
                        className="btn border-none bg-secondary hover:bg-secondary-focus hover:text-base-300 text-secondary-content"
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
    title: PropTypes.string,
    message: PropTypes.string,
    handleClick: PropTypes.func,
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
    title: PropTypes.string,
    message: PropTypes.string,
    handleClick: PropTypes.func,
    description: PropTypes.string,
    food: PropTypes.array,
};

export default Notification;
