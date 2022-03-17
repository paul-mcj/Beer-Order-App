import React from "react";

const Error = () => {
    const clickHandler = (e) => {
        window.location.href = "/";
    };
    return (
        <div>
            This is the error page
            <button onClick={clickHandler} className="btn btn-ghost">
                here to reload app
            </button>
        </div>
    );
};

export default Error;
