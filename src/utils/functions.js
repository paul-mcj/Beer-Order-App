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

// Redirect to error page
export const redirectToHomePg = () => (window.location = "/");
