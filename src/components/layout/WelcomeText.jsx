// react
import { Fragment } from "react";

// components
import Header from "../layout/Header";

const WelcomeText = () => {
    return (
        <Fragment>
            <Header>Order Your Beer Right Here</Header>
            <p className="mb-10 leading-8 text-md xsm:text-lg px-6 xsm:leading-10 text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ipsum ipsam pariatur
                voluptatem, totam obcaecati cumque assumenda adipisci explicabo impedit eveniet
                inventore incidunt et culpa debitis.
            </p>
        </Fragment>
    );
};

export default WelcomeText;
