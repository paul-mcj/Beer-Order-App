// React & Hooks
import { useContext, useEffect, useCallback } from "react";

// Components
import BeerItem from "./BeerItem";
import Card from "./Card";

// Context
import CartContext from "../../context/CartContext";
import { getBeers } from "../../context/CartActions";

const Ontap = () => {
    const { beers, dispatch } = useContext(CartContext);

    let beersArr = [];

    // in order to "save" the fetched data (and make sure it persists any re-rendering) we need to check if the context has anything it it
    const getApiData = async () => {
        console.log("running...");
        if (beers.length === 0) {
            for (let i = 0; i <= 10; i++) {
                try {
                    let beer = await getBeers();
                    validateArr(beersArr, beer);
                    beersArr.push(beer);
                    dispatch({ type: "GET_BEERS", payload: beersArr });
                } catch (error) {
                    // fixme: if theres an error (for example, two random beers happen to occur in the beers array, meaning there are two similar ids), re-direct to an error page!! This means the validation of this array has to accommodate that too! Make sure to include in app description that is potential manufacturing of an error is part of showcasing additional routing skills
                    window.location = "/error";
                }
            }
        } else return;
    };

    const validateArr = (beerArr, newBeer) => {
        beerArr.forEach((beer) => {
            if (beer.id !== newBeer.id) {
                return;
            } else {
                window.location = "/error";
            }
        });
    };

    useEffect(() => {
        getApiData();
    }, []);

    const showCart = beers && beers.map((beer) => <BeerItem key={beer.id} id={beer.id} />);

    return (
        <div className="mt-10">
            <Card>{showCart}</Card>
        </div>
    );
};

export default Ontap;
