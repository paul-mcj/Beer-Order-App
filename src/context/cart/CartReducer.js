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
        case "ADD_ONE_MORE":
            return {};
        default:
            return state;
    }
};

export default cartReducer;
