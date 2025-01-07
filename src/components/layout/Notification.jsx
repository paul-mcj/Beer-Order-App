// react
import { Fragment } from "react";
import PropTypes from "prop-types";

// react-dom
import ReactDOM from "react-dom";

// components
import Header from "./Header";
import ExitButton from "../ui/ExitButton";
import TextButton from "../ui/TextButton";
import Paragraph from "./Paragraph";

const Backdrop = () => {
	return (
		<div className="bg-base-content opacity-20 fixed top-0 left-0 w-full min-h-screen z-20" />
	);
};

const Overlay = ({
	title,
	message,
	handleClick,
	btnText,
	description,
	food
}) => {
	let foodPairing;
	// if food and description are passed in as props, then this <Notification /> will need to have unique css styles returned to fit users screens appropriately
	const extraDataToDisplay = food && description;

	if (extraDataToDisplay) {
		// map food array into <li> elements
		foodPairing = (
			<div className="text-center">
				<ul className="flex flex-col items-center">
					<p className="text-secondary font-bold text-base xsm:text-lg sm:text-xl tablet:text-2xl lg:text-3xl">
						Food Pairings
					</p>
					{food.map((foodItem) => (
						<li
							key={Math.random()}
							className="text-secondary-content list-none">
							<Paragraph>{foodItem}</Paragraph>
						</li>
					))}
				</ul>
			</div>
		);
	}

	return (
		<div className="flex fixed z-50 inset-0 justify-center items-center">
			<div
				className={`animate-fadeIn grid z-20 bg-neutral rounded top-24 mx-12`}>
				<section className="place-self-center flex flex-col m-10 justify-around h-fit">
					<div>
						{btnText !== "reload" && (
							<ExitButton handleClick={handleClick} />
						)}
					</div>
					<div className="text-primary">
						<Header>{title}</Header>
					</div>
					{extraDataToDisplay ? (
						<div className="text-secondary-content italic -mt-10 mb-5">
							<Paragraph>{message}</Paragraph>
						</div>
					) : (
						<div className="text-secondary-content mb-5">
							<Paragraph>{message}</Paragraph>
						</div>
					)}
					{extraDataToDisplay && (
						<div className="text-secondary-content mb-5 xsm:mx-5 sm:mx-8 tablet:mx-12">
							<Paragraph>{description}</Paragraph>
						</div>
					)}
					{extraDataToDisplay && foodPairing}
					<TextButton
						handleClick={handleClick}
						btnText={btnText}
					/>
				</section>
			</div>
		</div>
	);
};

// assign Overlay component proptypes
Overlay.propTypes = {
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
	btnText: PropTypes.string,
	description: PropTypes.string,
	food: PropTypes.array
};

const Notification = ({
	title,
	message,
	handleClick,
	btnText,
	description,
	food
}) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop />,
				document.getElementById("backdrop-root")
			)}
			{ReactDOM.createPortal(
				<Overlay
					title={title}
					message={message}
					handleClick={handleClick}
					description={description}
					btnText={btnText}
					food={food}
				/>,
				document.querySelector("#notification-root")
			)}
		</Fragment>
	);
};

// assign Notification proptypes
Notification.propTypes = {
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
	btnText: PropTypes.string,
	description: PropTypes.string,
	food: PropTypes.array
};

export default Notification;
