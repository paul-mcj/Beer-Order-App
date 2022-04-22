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
        default:
            return state;
    }
};

export default cartReducer;
