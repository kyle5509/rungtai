import { FilterTitleStyle } from "./data";
import { RadioSquare } from "../General/RadioSquare";

export default function DeliveryOptions() {
    return (
        <div>
            <p className={`${FilterTitleStyle}`}>Delivery Options & Services</p>
            <RadioSquare style="mb-2 mt-3" title="Choice" />
            <RadioSquare title="Free Shipping" />
        </div>
    )
}
