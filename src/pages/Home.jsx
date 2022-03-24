// React & Hooks
import React, { Fragment, useContext, useEffect } from "react";

// Components
import Ontap from "../components/layout/Ontap";
import WelcomeText from "../components/layout/WelcomeText";
import Loading from "../components/utils/Loading";

// Context
import CartContext from "../context/cart/CartContext";
import { getBeers } from "../context/cart/CartActions";
import ErrorContext from "../context/error/ErrorContext";

// Utils
import { validateArr } from "../utils/functions";

// Global variables
const BEERS_ARR = process.env.REACT_APP_BEERS_ARR_LENGTH;

const Home = () => {
    // import context
    const { beers, dispatch, isLoading } = useContext(CartContext);
    const { error, updateErrState } = useContext(ErrorContext);

    // declared local variable to hold data temporary before adding to context state
    let beersArr = [];

    const getApiData = async () => {
        // Do not run unless the context array is empty
        if (beers.length === 0) {
            for (let i = 0; i < BEERS_ARR; i++) {
                try {
                    let beer = await getBeers();
                    // fixme: this performErrorFn should be from via error.context (which pushes to error page), not an anonymous fn
                    // validateArr(beersArr, beer, updateErrState)
                    validateArr(beersArr, beer, () => {
                        window.location = "/error";
                    });
                    beersArr.push(beer);
                    console.log(beersArr);
                    dispatch({ type: "GET_BEERS", payload: beersArr });
                } catch (error) {
                    //fixme: this should re-direct via the error.context. ??
                    // window.location = "/error";
                }
            }
            // Make sure context is updated
            dispatch({ type: "NOT_LOADING" });
        } else return;
    };

    // Fetch data upon component initialization and set loading context state when fetching is occurring. Only invoke if there is no data in the context array.
    useEffect(() => {
        if (beers.length < BEERS_ARR) {
            getApiData();
            dispatch({ type: "IS_LOADING" });
        }
    }, []);

    return (
        // fixme: animation to bring all components into the page thorough quick counter-dissolve
        <Fragment>
            {isLoading ? (
                <Loading />
            ) : (
                <Fragment>
                    <WelcomeText />
                    <Ontap beers={beers} />
                </Fragment>
            )}
        </Fragment>
    );
};

export default Home;
