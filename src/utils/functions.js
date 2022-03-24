// Taking in an array and returning it if all items have unique ids. If not, process some passed in error function.
export const validateArr = (beerArr, newBeer, performErrorFn) => {
    beerArr.forEach((beer) => {
        if (beer.id !== newBeer.id) {
            return;
        } else {
            performErrorFn();
        }
    });
};
