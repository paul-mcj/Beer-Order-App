// React
import { Fragment } from "react";

// Components
import Ontap from "../components/layout/Ontap";

const Home = () => {
    return (
        <Fragment>
            <header className="font-bold text-lg text-center mb-3">
                Order Your Beer Right Here
            </header>
            <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ipsum ipsam pariatur
                voluptatem, totam obcaecati cumque assumenda adipisci explicabo impedit eveniet
                inventore incidunt et culpa debitis.
            </p>
            <Ontap />
        </Fragment>
    );
};

export default Home;
