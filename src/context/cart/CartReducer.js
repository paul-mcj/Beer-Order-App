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
        case "GET_BEERS":
            return {
                ...state,
                beers: action.payload,
            };
        default:
            return state;
    }
};

export default cartReducer;
