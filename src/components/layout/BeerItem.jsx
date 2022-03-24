// React & Hooks
import { Fragment, useContext } from "react";

const BeerItem = (props) => {
    return (
        <Fragment>
            <h1>{props.name}</h1>
            <h1>{props.id}</h1>
        </Fragment>
    );
};

export default BeerItem;
