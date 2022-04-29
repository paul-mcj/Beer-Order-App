// react
import { Fragment } from "react";
import PropTypes from "prop-types";

// react-dom
import ReactDOM from "react-dom";

// components
import Header from "./Header";
import Card from "./Card";

const Backdrop = () => {
    return <div className="bg-black opacity-25 fixed top-0 left-0 w-full h-screen z-10" />;
};

const Overlay = ({ title, message, handleClick, description, food }) => {
    return (
        <div className="grid justify-items-center">
            <div className="z-10 bg-secondary fixed top-20">
                <Card>
                    <Header>
                        <p className="text-accent-content">{title}</p>
                    </Header>
                    <p className="text-accent-content mb-5">{message}</p>
                    {description && <p>{description}</p>}
                    {food && <ul>food goes here</ul>}
                    <div className="mx-auto">
                        <button
                            className="btn btn-secondary text-accent-content hover:text-black"
                            onClick={handleClick}
                        >
                            continue
                        </button>
                    </div>
                </Card>
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
