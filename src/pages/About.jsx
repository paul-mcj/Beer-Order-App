// react
import { Fragment } from "react";

// react-router-dom
import { Link } from "react-router-dom";

const About = () => {
    return (
        <Fragment>
            <div className="flex flex-col text-center gap-y-5">
                <header className="font-bold text-lg text-center mb-3">About This App</header>
                <p>
                    This project utilizes React functional components and react router v6 to create
                    a SPA that allows users to simulate adding specific items to a cart with the
                    ability to quickly and dynamically change items in the cart, as well as navigate
                    to different pages of the application (such as the Home and About pages and the
                    Cart component).
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
