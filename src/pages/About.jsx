// components
import Header from "../components/layout/Header";
import PageWrapper from "../components/layout/PageWrapper";
import BeneathHeader from "../components/layout/BeneathHeader";

// framer-motion
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
        >
            <PageWrapper>
                <Header>About This App</Header>
                <div className="flex flex-col text-center">
                    <BeneathHeader>
                        <p className="leading-6 xsm:leading-8 text-sm xsm:text-base">
                            This project utilizes React functional components and react router v6 to
                            create a SPA that allows users to simulate adding specific beer items to
                            a cart with an updated total price and a final checkout.
                        </p>
                        <p className="leading-6 xsm:leading-8 text-sm xsm:text-base">
                            It gives users the ability to quickly and dynamically change items in
                            the cart, as well as navigating to different sections of the application
                            (such as the Home and About pages).
                        </p>
                        <p className="leading-6 xsm:leading-8 text-sm xsm:text-base">
                            This application makes use of asynchronous JS to gather&nbsp;
                            <a
                                className="link link-accent"
                                target="_blank"
                                href="https://punkapi.com/documentation/v2"
                            >
                                API data
                            </a>
                            &nbsp; via HTTP fetch requests and transforms the results into
                            realistic, usable information for the cart capability. UI is styled with{" "}
                            <a
                                className="link link-accent"
                                target="_blank"
                                href="https://tailwindcss.com/"
                            >
                                Tailwind CSS
                            </a>
                            &nbsp; and sprinkles use of both custom and &nbsp;
                            <a
                                className="link link-accent"
                                target="_blank"
                                href="https://www.framer.com/motion/"
                            >
                                framer motion
                            </a>
                            &nbsp; animations for an enjoyable UX.
                        </p>
                        <p className="leading-6 xsm:leading-8 text-sm xsm:text-base">
                            For more on the specifics of this application, see the Github &nbsp;
                            <a
                                className="link link-accent"
                                target="_blank"
                                href="https://github.com/paul-mcj/Beer-Order-App#readme"
                            >
                                documentation
                            </a>
                            .
                        </p>
                        <p className="leading-6 xsm:leading-8 text-sm xsm:text-base">
                            For more on my other projects, see my&nbsp;
                            <a
                                className="link link-accent"
                                target="_blank"
                                href="https://github.com/paul-mcj/"
                            >
                                Github
                            </a>
                            &nbsp; profile.
                        </p>
                    </BeneathHeader>
                </div>
            </PageWrapper>
        </motion.div>
    );
};

export default About;
