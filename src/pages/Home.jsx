// react & hooks
import React, { Fragment, useContext, useEffect, useState } from "react";

// components
import Ontap from "../components/layout/Ontap";
import WelcomeText from "../components/layout/WelcomeText";
import LoadingIcon from "../components/assets/LoadingIcon";
import Pagination from "../components/layout/Pagination";
import PageWrapper from "../components/layout/PageWrapper";

// context
import CartContext from "../context/cart/CartContext";
import { getRandomBeer } from "../context/cart/CartActions";

// framer-motion
import { motion } from "framer-motion";

const Home = () => {
	// local state
	const [pageNum, setPageNum] = useState(1);

	// context
	const { beers, dispatch, isLoading } = useContext(CartContext);

	// declare local variable to hold data temporarily before adding to cart context
	let beersArr = [];

	// fetch data upon component initialization, set loading context state when fetching is occurring, and set to the first page
	useEffect(() => {
		if (beers.length === 0) {
			const getApiData = () => {
				let beer = getRandomBeer();
				// if beer already exists, skip current iteration (want unique beers only)
				if (beersArr.find((item) => item.id === beer.id)) {
					return;
				} else {
					beersArr.push(beer);
					dispatch({ type: "SET_BEERS", payload: beersArr });
				}
			};

			while (beersArr.length < 12) {
				getApiData();
			}

			if (beersArr.length === 12) {
				// simulate loading from backend
				dispatch({ type: "IS_LOADING" });
				setTimeout(() => {
					dispatch({ type: "NOT_LOADING" });
				}, 1000);
			}
		}
	}, []);

	// function sets the current page
	const setCurrentPage = (num) => {
		setPageNum(() => num);
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.25 } }}>
			<PageWrapper>
				{isLoading ? (
					<LoadingIcon />
				) : (
					<Fragment>
						<WelcomeText />
						<Ontap pageNum={pageNum} />
						<Pagination
							pageNum={pageNum}
							setCurrentPage={setCurrentPage}
						/>
					</Fragment>
				)}
			</PageWrapper>
		</motion.div>
	);
	// }
};

export default Home;
