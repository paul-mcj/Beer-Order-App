// React & Hooks
import React, { Fragment, useCallback, useContext, useEffect } from "react";

// React-router-dom
import { Navigate } from "react-router-dom";

// Components
import Ontap from "../components/layout/Ontap";
import WelcomeText from "../components/layout/WelcomeText";
import Loading from "../components/assets/Loading";

// Context
import CartContext from "../context/cart/CartContext";
import { getBeers } from "../context/cart/CartActions";
import ErrorContext from "../context/error/ErrorContext";

// Utils
import { validateArr } from "../utils/functions";

// Global variables
const BEERS_ARR = process.env.REACT_APP_BEERS_ARR_LENGTH;

const Home = () => {
    // import destruct. context
    const { beers, dispatch, isLoading } = useContext(CartContext);
    const { updateMsgState, error } = useContext(ErrorContext);

    // declared local variable to hold data temporarily before adding to context state
    let beersArr = [];

    // async function that grabs API data and updates context with values. useCallback will optimize function to not be re-evaluated (and thus not make any more http requests) when component updates.
    const getApiData = useCallback(async () => {
        // Do not run unless the context array is empty
        if (beers.length === 0) {
            for (let i = 0; i < 8; i++) {
                try {
                    let beer = await getBeers();
                    // validate the local array -- if repeated values occur then update ErrorContext
                    validateArr(beersArr, beer, () => {
                        updateMsgState(
                            `Returned ${error} values from the server causing errors. Please reload the application.`
                        );
                    });
                    // otherwise update local array and then update CartContext array
                    beersArr.push(beer);
                    // add array to cart
                    dispatch({ type: "SET_BEERS", payload: beersArr });
                } catch (error) {
                    updateMsgState(
                        `There was an error connecting to the server. ${error}. Please reload the application.`
                    );
                }
                // update loading context state regardless of error
                dispatch({ type: "NOT_LOADING" });
            }
        } else return;
    }, []);

    // Fetch data upon component initialization and set loading context state when fetching is occurring. Only invoke if there is no data in the context array.
    useEffect(() => {
        if (beers.length < 8) {
            getApiData();
            dispatch({ type: "IS_LOADING" });
        }
    }, []);

    // check ErrorContext and redirect to Error page if an error occurs when fetching data
    if (error) {
        return <Navigate to="/error" />;
    } else {
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
    }
};

export default Home;
