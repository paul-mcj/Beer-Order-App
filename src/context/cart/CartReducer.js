const cartReducer = (state, action) => {
	switch (action.type) {
		case "NOT_LOADING":
			return {
				...state,
				isLoading: false
			};
		case "IS_LOADING":
			return {
				...state,
				isLoading: true
			};
		case "SET_BEERS":
			return {
				...state,
				beers: action.payload
			};
		// change the quantity of a certain beer by searching for it based upon unique id
		case "UPDATE_BEER_ITEM_AMOUNT":
			const { id, amount } = action.payload;
			const beerItemIndex = state.beers.findIndex(
				(beer) => beer.id === id
			);
			const beerItem = state.beers[beerItemIndex];
			let updatedBeerItem = {
				...beerItem,
				amount
			};
			let returnedArr = [...state.beers];
			returnedArr[beerItemIndex] = updatedBeerItem;
			return {
				...state,
				beers: returnedArr
			};
		case "UPDATE_TOTAL_ITEMS":
			return {
				...state,
				totalItems: action.payload
			};
		case "UPDATE_TOTAL_PRICE":
			return {
				...state,
				totalPrice: action.payload
			};
		case "SORT_STATE":
			const sortedArr = [...state.beers];
			const condition = action.payload;
			sortedArr.sort((a, b) => {
				const nameA = a.name.toUpperCase();
				const nameB = b.name.toUpperCase();
				// sort the array according to payload instructions
				switch (condition) {
					case "SORT_A_TO_Z":
						if (nameA < nameB) return -1;
						if (nameA > nameB) return 1;
						return 0;
					case "SORT_Z_TO_A":
						if (nameA > nameB) return -1;
						if (nameA < nameB) return 1;
						return 0;
					case "SORT_LOW_TO_HIGH":
						return a.price - b.price;
					case "SORT_HIGH_TO_LOW":
						return b.price - a.price;
					default:
						return state;
				}
			});
			return {
				...state,
				beers: sortedArr
			};
		default:
			return {
				beers: [],
				isLoading: true,
				totalPrice: 0,
				totalItems: 0
			};
	}
};

export default cartReducer;
