// Components
import Card from "./Card";
import BeerItemAmount from "../ui/BeerItemAmount";

const BeerItem = (props) => {
    return (
        <Card>
            <ul className="flex justify-between">
                <li className="flex flex-col basis-1/2">
                    <p>{props.name}</p>
                    <p>${props.amount}</p>
                </li>
                <li className="flex justify-between items-center">
                    <BeerItemAmount />
                </li>
            </ul>
        </Card>
    );
};

export default BeerItem;
