export const getBeers = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers/random");
    const data = await res.json();
    return data[0];
};
