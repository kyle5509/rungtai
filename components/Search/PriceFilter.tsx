import { FilterTitleStyle } from "./data";
import { RadioSquare } from "../General/RadioSquare";

export default function PriceFilter() {
    return (
        <div className="mt-8">
            <p className={`${FilterTitleStyle}`}>Price Range</p>
            <div className="grid grid-cols-2 mt-2 gap-4">
                <input type="text" className="h-12 outline-none bg-transparent pl-2 border-2 rounded-md" placeholder="Min"/>
                <input type="text" className="h-12 outline-none bg-transparent pl-2 border-2 rounded-md" placeholder="Max"/>
            </div>
            <button className="h-12 w-full duration-300 active:scale-95 rounded-md mt-3 bg-blue-900 hover:bg-blue-950 font-semibold text-white shadow-md">Ok</button>
        </div>
    )
}
