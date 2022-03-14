// React & Hooks
import { useContext, useEffect, useState } from "react";

// Components
import BeerItem from "./BeerItem";
import Card from "./Card";

// Context
import CartContext from "../../context/CartContext";
import { getBeers } from "../../context/CartActions";

const Ontap = () => {
    const cartContext = useContext(CartContext);

    // const [beers, setBeers] = useState([]);

    // Loop through 5 times to fetch data
    const getApiData = async () => {
        for (let i = 0; i <= 4; i++) {
            const beer = await getBeers();
            cartContext.dispatch({ type: "GET_BEERS", payload: beer });

            // setBeers((prev) => {
            //     return [...prev, beer];
            // });
        }
    };

    useEffect(() => {
        console.log(getApiData());
        // Update context
    }, []);

    return (
        <div className="mt-10">
            <Card>
                {cartContext.beers &&
                    cartContext.beers.map((beer) => <BeerItem key={beer.id} id={beer.id} />)}
            </Card>
        </div>
    );
};

export default Ontap;
