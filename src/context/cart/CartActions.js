// local API
import beerData from "../../assets/data.json";

// fetch data from API
export const getRandomBeer = () => {
	// get random object from API
	const randomBeerId = Math.floor(Math.random() * beerData.length) + 1;

	// return it
	return beerData.find((beer) => beer.id === randomBeerId);
};
