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

    const [beers, setBeers] = useState([]);

    // Loop through 5 times to fetch data
    const getApiData = async () => {
        for (let i = 0; i <= 4; i++) {
            let beer = await getBeers();
            setBeers((prev) => {
                return [...prev, beer];
            });
            cartContext.dispatch({ type: "GET_BEERS", payload: beer });
        }
    };

    useEffect(() => {
        getApiData();
        // Update context
    }, []);

    return (
        <div className="mt-10">
            <Card>
                {beers > 0 && (
                    <p>
                        {cartContext.beers.map((beer) => (
                            <BeerItem key={beer.id} />
                        ))}
                    </p>
                )}
            </Card>
        </div>
    );
};

export default Ontap;
