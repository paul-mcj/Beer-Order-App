// react
import { Fragment } from "react";

// components
import Header from "../layout/Header";
import BeneathHeader from "./BeneathHeader";
import Paragraph from "../layout/Paragraph";

const WelcomeText = () => {
    return (
        <Fragment>
            <Header>Order Your Beer Right Here</Header>
            <BeneathHeader>
                <Paragraph>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ipsum ipsam
                    pariatur voluptatem, totam obcaecati cumque assumenda adipisci explicabo impedit
                    eveniet inventore incidunt et culpa debitis.
                </Paragraph>
            </BeneathHeader>
        </Fragment>
    );
};

export default WelcomeText;
