// react & hooks
import { Fragment } from "react";

// components
import Button from "../components/ui/Button";

// utils
import { redirectToHomePg } from "../utils/functions";

const NotFound = () => {
    return (
        <Fragment>
            <h1>Oops!</h1>
            <p>Looks like the page you were looking for does not exist.</p>
            <Button handleClick={redirectToHomePg}>Go Home</Button>
        </Fragment>
    );
};

export default NotFound;
