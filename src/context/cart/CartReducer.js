const cartReducer = (state, action) => {
    switch (action.type) {
        case "NOT_LOADING":
            return {
                ...state,
                isLoading: false,
            };
        case "IS_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "SET_BEERS":
            return {
                ...state,
                beers: action.payload,
            };
        case "UPDATE_BEER_ITEM_AMOUNT":
            const { id, amount } = action.payload;
            const beerItemIndex = state.beers.findIndex((beer) => beer.id === id);
            const beerItem = state.beers[beerItemIndex];
            let updatedBeerItem = {
                ...beerItem,
                amount,
            };
            let returnedArr = [...state.beers];
            returnedArr[beerItemIndex] = updatedBeerItem;
            return {
                ...state,
                beers: returnedArr,
            };
        case "UPDATE_TOTAL_ITEMS":
            return {
                ...state,
                totalItems: action.payload,
            };
        case "UPDATE_TOTAL_PRICE":
            return {
                ...state,
                totalPrice: action.payload,
            };
        case "SORT_A_TO_Z":
            let alphabetizedArr = [...state.beers];
            alphabetizedArr.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });
            return {
                ...state,
                beers: alphabetizedArr,
            };
        case "SORT_Z_TO_A":
            let deAlphabetizedArr = [...state.beers];
            deAlphabetizedArr.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA > nameB) return -1;
                if (nameA < nameB) return 1;
                return 0;
            });
            return {
                ...state,
                beers: deAlphabetizedArr,
            };
        case "SORT_LOW_T0_HIGH":
            let lowToHighArr = [...state.beers];
            lowToHighArr.sort((a, b) => {
                const priceA = a.price;
                const priceB = b.price;
                // if (priceA < priceB) return -1;
                // if (priceA > priceB) return 1;
                // return 0;
                return a.price - b.price;
            });
            return {
                ...state,
                beers: lowToHighArr,
            };
        case "SORT_HIGH_TO_LOW":
            let highToLowArr = [...state.beers];
            highToLowArr.sort((a, b) => {
                const priceA = a.price;
                const priceB = b.price;
                // if (priceA > priceB) return -1;
                // if (priceA < priceB) return 1;
                // return 0;
                return b.price - a.price;
            });
            return {
                ...state,
                beers: highToLowArr,
            };
        default:
            return state;
    }
};

export default cartReducer;
