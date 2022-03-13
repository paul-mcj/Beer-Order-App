const cartReducer = (state, action) => {
    switch (action.type) {
        case "OPEN_CART":
            return {
                ...state,
                cartIsOpen: true,
            };
        default:
            return state;
    }
};

export default cartReducer;
