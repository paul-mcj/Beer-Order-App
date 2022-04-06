// Fetch data from API (for now simply log error)
export const getBeers = async () => {
    try {
        const res = await fetch("https://api.punkapi.com/v2/beers/random");
        const data = await res.json();
        return data[0];
    } catch (error) {
        return error;
    }
};
