// Taking in an array and returning it if all items have unique ids. If not
export const validateArr = (beerArr, newBeer, performError) => {
    beerArr.forEach((beer) => {
        if (beer.id !== newBeer.id) {
            return;
        } else {
            performError();
        }
    });
};

// Find location of a beer object in an array given an id
export const findBeerIndex = (beerArr, beerObj) => {
    return beerArr.findIndex((beer) => beer.id === beerObj);
};

// Redirect to error page
export const redirectToHomePg = () => (window.location = "/");
