const cartReducer = (state, action) => {
    switch (action.type) {
        case "OPEN_CART":
            return {
                ...state,
                cartIsOpen: true,
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
