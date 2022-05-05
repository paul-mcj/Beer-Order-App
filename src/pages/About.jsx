// components
import Header from "../components/layout/Header";
import PageWrapper from "../components/layout/PageWrapper";

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
                <div className="flex flex-col text-center gap-y-10 px-12">
                    <p className="leading-8">
                        This project utilizes React functional components and react router v6 to
                        create a SPA that allows users to simulate adding specific items to a cart
                        with the ability to quickly and dynamically change items in the cart, as
                        well as navigate to different pages of the application (such as the Home and
                        About pages and the Cart component).
                    </p>
                    <p className="leading-8">
                        It makes use of asynchronous JS to gather&nbsp;
                        <a
                            className="link link-accent"
                            target="_blank"
                            href="https://punkapi.com/documentation/v2"
                        >
                            API data
                        </a>
                        &nbsp;and transforms the result into realistic, usable information for the
                        application. UI is styled with{" "}
                        <a
                            className="link link-accent"
                            target="_blank"
                            href="https://tailwindcss.com/"
                        >
                            Tailwind CSS
                        </a>
                        &nbsp; and sprinkles use of both custom and framer motion animations for an
                        enjoyable UX.
                    </p>
                    <p className="leading-8">
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
                    <p className="leading-8">
                        For more on my other projects, see my&nbsp;
                        <a
                            className="link link-accent"
                            target="_blank"
                            href="https://github.com/paul-mcj/"
                        >
                            Github
                        </a>{" "}
                        profile.
                    </p>
                </div>
            </PageWrapper>
        </motion.div>
    );
};

export default About;
