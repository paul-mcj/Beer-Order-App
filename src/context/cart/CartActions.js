// fetch data from API (for now simply log error)
export const getBeers = async () => {
    try {
        const res = await fetch("https://api.punkapi.com/v2/beers/random");
        if (!res.ok) throw new Error();
        const data = await res.json();
        // check for too low of abv and fix for more realistic price
        let price = +data[0].abv.toFixed(2);
        if (price < 6) price = +data[0].abv.toFixed(2) + 6;
        // create a new beer item only with essential properties
        let beer = {
            id: data[0].id,
            price,
            name: data[0].name,
            amount: 0,
            est: data[0].first_brewed,
            description: data[0].description,
            food: data[0].food_pairing,
        };
        return beer;
    } catch (error) {
        return error;
    }
};

// taking in an array and returning it if all items have unique ids. If not, perform passed in function to handle error.
export const validateArr = (beerArr, newBeer, performError) => {
    beerArr.forEach((beer) => {
        if (beer.id !== newBeer.id) {
            return;
        } else {
            performError();
            console.log(newBeer);
        }
    });
};
