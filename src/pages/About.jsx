// react
import { Fragment } from "react";

// components
import Header from "../components/layout/Header";

const About = () => {
    return (
        <Fragment>
            <div className="flex flex-col text-center gap-y-5">
                <Header>About This App</Header>
                <p>
                    This project utilizes React functional components and react router v6 to create
                    a SPA that allows users to simulate adding specific items to a cart with the
                    ability to quickly and dynamically change items in the cart, as well as navigate
                    to different pages of the application (such as the Home and About pages and the
                    Cart component).
                </p>
                <p>
                    It makes use of asynchronous JS functionality to get&nbsp;
                    <a
                        className="link link-accent"
                        target="_blank"
                        href="https://punkapi.com/documentation/v2"
                    >
                        API data
                    </a>
                    &nbsp;and make it look good.
                </p>
                <p>
                    For more on the specifics of this application, see the&nbsp;
                    <a
                        className="link link-accent"
                        target="_blank"
                        href="https://github.com/paul-mcj/Beer-Order-App#readme"
                    >
                        documentation
                    </a>
                    .
                </p>
            </div>
        </Fragment>
    );
};

export default About;
