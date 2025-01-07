// components
import Header from "../components/layout/Header";
import PageWrapper from "../components/layout/PageWrapper";
import BeneathHeader from "../components/layout/BeneathHeader";
import Paragraph from "../components/layout/Paragraph";

// framer-motion
import { motion } from "framer-motion";

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.25 } }}>
			<PageWrapper>
				<Header>About This App</Header>
				<BeneathHeader>
					<div className="flex flex-col text-center gap-8 tablet:gap-12 sm:px-20">
						<Paragraph>
							This project utilizes React functional
							components and react router v6 to create a
							SPA that allows users to simulate adding
							specific beer items to a cart with an updated
							total price and a final checkout.
						</Paragraph>
						<Paragraph>
							It gives users the ability to quickly and
							dynamically change items in the cart, as well
							as navigating to different sections of the
							application (such as the Home and About
							pages).
						</Paragraph>
						<Paragraph>
							This application originally made use of
							asynchronous JavaScript to gather API data
							via HTTP fetch requests, and transformed the
							results into realistic, usable information
							for the cart capability. Since the API URL is
							no longer available, a local API was made
							instead and re-creates the JSON data.
						</Paragraph>
						<Paragraph>
							UI is styled with&nbsp;
							<a
								className="link link-accent"
								target="_blank"
								href="https://tailwindcss.com/"
								rel="noreferrer">
								Tailwind CSS
							</a>
							&nbsp;and sprinkles use of both custom
							and&nbsp;
							<a
								className="link link-accent"
								target="_blank"
								href="https://www.framer.com/motion/"
								rel="noreferrer">
								framer motion
							</a>
							&nbsp;animations for an enjoyable UX.
						</Paragraph>
						<Paragraph>
							For more on the specifics of this
							application, see the Github&nbsp;
							<a
								className="link link-accent"
								target="_blank"
								href="https://github.com/paul-mcj/Beer-Order-App#readme"
								rel="noreferrer">
								documentation
							</a>
							.
						</Paragraph>
						<Paragraph>
							For more on my other projects, see my&nbsp;
							<a
								className="link link-accent"
								target="_blank"
								href="https://github.com/paul-mcj/"
								rel="noreferrer">
								Github
							</a>
							&nbsp;profile.
						</Paragraph>
					</div>
				</BeneathHeader>
			</PageWrapper>
		</motion.div>
	);
};

export default About;
