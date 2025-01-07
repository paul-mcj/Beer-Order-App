// react
import { Fragment } from "react";

// components
import Header from "../layout/Header";
import BeneathHeader from "./BeneathHeader";
import Paragraph from "../layout/Paragraph";

const WelcomeText = () => {
	return (
		<Fragment>
			<Header>Order Your Beer Right Here</Header>
			<BeneathHeader>
				<Paragraph>
					See our variety of available beers! Read more about
					each and add as many to your cart as you desire!
				</Paragraph>
			</BeneathHeader>
		</Fragment>
	);
};

export default WelcomeText;
